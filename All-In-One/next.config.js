module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Replace with your image domain
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-api-domain.com/:path*', // Proxy to Backend
      },
    ];
  },
  // SEO optimization settings
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};