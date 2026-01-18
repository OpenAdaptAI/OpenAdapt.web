/**
 * API route to discover all openadapt-* packages from PyPI
 *
 * *** SINGLE SOURCE OF TRUTH FOR PACKAGE LISTS ***
 * This is the ONLY place where the fallback package list should be defined.
 * All other code should call this API endpoint to get the package list.
 *
 * Since PyPI no longer has a search API, we use a hybrid approach:
 * 1. Check a list of known/potential package names (POTENTIAL_PACKAGES)
 * 2. Verify each package exists via PyPI's JSON API
 * 3. Cache the results for 24 hours
 * 4. Return a fallback list only if discovery fails
 */

// Known and potential openadapt packages to check
// This list can include packages that don't exist yet - they'll be filtered out during discovery
const POTENTIAL_PACKAGES = [
    'openadapt',
    'openadapt-ml',
    'openadapt-capture',
    'openadapt-evals',
    'openadapt-viewer',
    'openadapt-grounding',
    'openadapt-retrieval',
    'openadapt-privacy',
    'openadapt-tray',
    'openadapt-telemetry',
    'openadapt-agent',
    'openadapt-web',
    'openadapt-api',
    'openadapt-core',
    'openadapt-server',
    'openadapt-client',
];

let cachedPackages = null;
let cacheTimestamp = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Checks if a package exists on PyPI
 * @param {string} packageName - The package name to check
 * @returns {Promise<boolean>} - True if package exists
 */
async function packageExists(packageName) {
    try {
        const response = await fetch(`https://pypi.org/pypi/${packageName}/json`, {
            method: 'HEAD',
        });
        return response.ok;
    } catch (error) {
        console.warn(`Error checking package ${packageName}:`, error);
        return false;
    }
}

/**
 * Discovers all existing openadapt-* packages
 * @returns {Promise<string[]>} - Array of package names that exist on PyPI
 */
async function discoverPackages() {
    // Return cached result if still valid
    if (cachedPackages && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_DURATION) {
        return cachedPackages;
    }

    // Check all potential packages in parallel
    const results = await Promise.all(
        POTENTIAL_PACKAGES.map(async (pkg) => ({
            name: pkg,
            exists: await packageExists(pkg),
        }))
    );

    // Filter to only existing packages
    const existingPackages = results
        .filter(({ exists }) => exists)
        .map(({ name }) => name);

    // Update cache
    cachedPackages = existingPackages;
    cacheTimestamp = Date.now();

    return existingPackages;
}

export default async function handler(req, res) {
    try {
        const packages = await discoverPackages();

        // Cache for 24 hours on client side, use stale-while-revalidate for resilience
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

        return res.status(200).json({
            packages,
            count: packages.length,
            timestamp: cacheTimestamp,
            cacheExpiresAt: new Date(cacheTimestamp + CACHE_DURATION).toISOString(),
        });
    } catch (error) {
        console.error('Error discovering packages:', error);

        // FALLBACK LIST - Only returned if PyPI discovery completely fails
        // This is the single source of truth for the fallback package list
        // Last updated: 2025-01-18
        const fallbackPackages = [
            'openadapt',
            'openadapt-ml',
            'openadapt-capture',
            'openadapt-evals',
            'openadapt-viewer',
            'openadapt-grounding',
            'openadapt-retrieval',
            'openadapt-privacy',
        ];

        // Cache fallback for shorter duration (1 hour) to retry discovery sooner
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json({
            packages: fallbackPackages,
            count: fallbackPackages.length,
            fallback: true,
            error: 'Failed to discover packages, using fallback list',
        });
    }
}
