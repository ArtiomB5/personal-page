/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'readyplayerme-photobooth.s3.amazonaws.com',
                pathname: '/**/**',
            },
        ],
    },
    experimental: { serverActions: true }
}

module.exports = nextConfig