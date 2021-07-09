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
        ],
        // This object gets passed directly to the gtag config command
        gtagConfig: {
          // TODO also check consent https://developers.google.com/gtagjs/devguide/consent
          // see also https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/#the-gtagconfiganonymize_ip-option
          anonymize_ip: true,
          // TODO review cookie expiration settings (https://developers.google.com/gtagjs/devguide/cookies#cookie_expiration)
          // we should probably keep the defaults
          // cookie_expires: 0,
          // TODO page_view to true (by default, seems set to false by the plugin)?
          // see answer in https://github.com/gatsbyjs/gatsby/issues/21181 comment on 2021-03-21
          // "For anyone interested in the "send_page_view: false" part: this is OK, it's the plugin avoiding duplicate tracking of page hits.
          // At the time of writing this, the plugin uses the onRouteUpdate API to send page views."
          //send_page_view: true,
        },

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Google Global Site Tag will not be loaded at all for visitors that have “Do Not Track” enabled.
          // TODO review if we want to use respectDNT
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
};
