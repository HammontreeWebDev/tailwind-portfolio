/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            { "hostname": 'api.badgr.io' }
        ]
    }
};

export default nextConfig;
