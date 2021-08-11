const colors = require('./src/theme/colors.json');

// Only the variables prefixed by 'GATSBY_' can be available in browser code
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
        trackingIds: [
          process.env.GATSBY_GA_MEASUREMENT_ID, // Google Analytics
        ],
        // This object gets passed directly to the gtag config command
        gtagConfig: {
          // see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/#the-gtagconfiganonymize_ip-option
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Google Global Site Tag will not be loaded at all for visitors that have “Do Not Track” enabled.
          respectDNT: true,
        },
      },
    },
  ],
};
