const colors = require('./src/theme/colors.json');

module.exports =  {
    siteMetadata: {
      title: "Process Analytics",
      siteUrl: `https://process-analytics.dev`,
    },
    plugins: [
      "gatsby-plugin-image",
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
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "./src/images/",
        },
        __key: "images",
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: "./src/pages/",
        },
        __key: "pages",
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-typescript',
      'gatsby-plugin-styled-components',
    ],
};
