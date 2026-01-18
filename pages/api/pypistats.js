/**
 * API route to proxy pypistats.org requests
 * This avoids CORS issues when fetching from the client
 */

// Simple in-memory cache for discovered packages
let discoveredPackagesCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Fetches the list of discovered openadapt-* packages
 * @returns {Promise<string[]>} - Array of package names
 */
async function getDiscoveredPackages() {
    // Return cached result if still valid
    if (discoveredPackagesCache && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_DURATION) {
        return discoveredPackagesCache;
    }

    try {
        // Call our own discovery API
        const baseUrl = process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/discover-packages`);

        if (!response.ok) {
            throw new Error(`Discovery API returned ${response.status}`);
        }

        const data = await response.json();
        discoveredPackagesCache = data.packages || [];
        cacheTimestamp = Date.now();

        return discoveredPackagesCache;
    } catch (error) {
        console.warn('Failed to discover packages, using fallback:', error);

        // Fallback to known packages
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

        if (!discoveredPackagesCache) {
            discoveredPackagesCache = fallbackPackages;
            cacheTimestamp = Date.now() - CACHE_DURATION + 3600000; // Expire in 1 hour
        }

        return discoveredPackagesCache;
    }
}

export default async function handler(req, res) {
    const { package: packageName, endpoint = 'overall', period } = req.query;

    if (!packageName) {
        return res.status(400).json({ error: 'Package name is required' });
    }

    // Validate package name pattern (must start with 'openadapt')
    if (!packageName.startsWith('openadapt')) {
        return res.status(400).json({ error: 'Only openadapt-* packages are allowed' });
    }

    // Validate package exists in discovered packages
    const allowedPackages = await getDiscoveredPackages();
    if (!allowedPackages.includes(packageName)) {
        return res.status(400).json({
            error: 'Package not found in discovered openadapt packages',
            hint: 'Package may not exist on PyPI yet',
        });
    }

    // Whitelist allowed endpoints
    const allowedEndpoints = ['overall', 'recent'];
    if (!allowedEndpoints.includes(endpoint)) {
        return res.status(400).json({ error: 'Invalid endpoint' });
    }

    try {
        // Build URL - only include period if explicitly provided
        // For the 'recent' endpoint, omitting period returns all three: last_day, last_week, last_month
        let url = `https://pypistats.org/api/packages/${packageName}/${endpoint}?mirrors=true`;
        if (period) {
            url += `&period=${period}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
            return res.status(response.status).json({
                error: `pypistats.org returned ${response.status}`,
            });
        }

        const data = await response.json();

        // Cache for 1 hour
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching from pypistats.org:', error);
        return res.status(500).json({ error: 'Failed to fetch package stats' });
    }
}
