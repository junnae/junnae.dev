module.exports = {
  siteMetadata: {
    siteUrl: "https://www.junnae.dev",
    title: "junnae.dev",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-theme-ui`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`
  ],
};
