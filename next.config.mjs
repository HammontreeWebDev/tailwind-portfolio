/** @type {import('next').NextConfig} */

import forms from '@tailwindcss/forms';

const nextConfig = {
    images: {
        remotePatterns: [
            { "hostname": 'api.badgr.io' }
        ]
    },
    plugins: [
        forms,
    ],
};

export default nextConfig;
