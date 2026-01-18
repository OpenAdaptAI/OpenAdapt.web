/**
 * API route to proxy pypistats.org requests
 * This avoids CORS issues when fetching from the client
 *
 * Uses the shared packageDiscovery utility to get the list of valid packages.
 * This avoids HTTP calls between serverless functions which can be unreliable.
 */

import { getDiscoveredPackages } from '../../utils/packageDiscovery.js';

export default async function handler(req, res) {
    const { package: packageName, endpoint = 'overall', period } = req.query;

    if (!packageName) {
        return res.status(400).json({ error: 'Package name is required' });
    }

    // Validate package name pattern (must start with 'openadapt')
    if (!packageName.startsWith('openadapt')) {
        return res.status(400).json({ error: 'Only openadapt-* packages are allowed' });
    }

    try {
        // Validate package exists in discovered packages
        const allowedPackages = await getDiscoveredPackages();
        if (!allowedPackages.includes(packageName)) {
            return res.status(400).json({
                error: 'Package not found in discovered openadapt packages',
                hint: 'Package may not exist on PyPI yet',
            });
        }
    } catch (error) {
        console.error('Error validating package:', error);
        return res.status(500).json({
            error: 'Failed to validate package',
            message: error.message,
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
