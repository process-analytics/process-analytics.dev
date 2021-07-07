const colors = require('./src/theme/colors.json');

module.exports = {
  siteMetadata: {
    title: 'Process Analytics',
    siteUrl: `https://process-analytics.dev`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Process Analytics',
        start_url: '/',
        background_color: colors.background,
        theme_color: colors.primary,
        display: 'minimal-ui',
        icon: 'src/images/logo.svg',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-D2D0FR22RN', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          //optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          // cookie_expires: 0, TODO not documented, check purpose
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Google Global Site Tag will not be loaded at all for visitors that have “Do Not Track” enabled.
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
};
