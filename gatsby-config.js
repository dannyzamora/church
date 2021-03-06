/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        }
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    `gatsby-plugin-mdx`
  ],
}
