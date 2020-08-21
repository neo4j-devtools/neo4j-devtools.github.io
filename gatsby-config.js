require("dotenv").config()

const config = require("./config/site")

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.title,
    description: config.description,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: config.githubApiToken,
        graphQLQuery: config.githubApiQuery,
        variables: config.githubApiVariables,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neo4j-developer-tools`,
        short_name: `neo4j-devtools`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/neo4j-globe.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
