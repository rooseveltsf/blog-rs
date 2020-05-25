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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "production",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
  ],
}
