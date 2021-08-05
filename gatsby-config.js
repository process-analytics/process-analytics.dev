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
        trackingIds: [
          'G-D2D0FR22RN', // Google Analytics
        ],
        // This object gets passed directly to the gtag config command
        gtagConfig: {
          // see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/#the-gtagconfiganonymize_ip-option
          anonymize_ip: true,
          cookie_prefix: 'pa',
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
