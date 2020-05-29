module.exports = {
  siteMetadata: {
    title: `RooseveltSouza`,
    description: `Blog de Roosevelt de Souza.`,
    author: `@rooseveltsf`,
    siteUrl: `https://www.roosevelts.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 400,
          //   },
          // },
          `gatsby-remark-images`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "production",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BlogRoosevelt`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#FFCC57`,
        display: `standalone`,
        icon: `src/assets/Icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#FFCC57`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `500`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
