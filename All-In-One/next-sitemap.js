const { createSitemap } = require('next-sitemap');

module.exports = {
  siteUrl: 'https://www.yoursaasdomain.com', // Replace with your actual domain
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000, // (optional, default: 5000)
  transform: async (config, path) => {
    return {
      loc: path, // The path of the page
      changefreq: 'daily', // Change frequency
      priority: 0.7, // Priority of the page
    };
  },
};