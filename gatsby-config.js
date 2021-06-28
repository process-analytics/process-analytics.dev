const colors = require('./src/theme/colors.json');

module.exports =  {
    siteMetadata: {
      title: "Process Analytics",
      siteUrl: `https://process-analytics.dev`,
    },
    plugins: [
      "gatsby-plugin-sitemap",
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: 'Process Analytics',
          start_url: '/',
          background_color: colors.background,
          theme_color: colors.primary,
          display: 'minimal-ui',
          icon: "src/images/logo.svg",
        },
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-typescript',
      'gatsby-plugin-styled-components',
    ],
};
