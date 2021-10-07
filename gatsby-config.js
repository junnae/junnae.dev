module.exports = {
  siteMetadata: {
    siteUrl: "https://www.junnae.dev",
    title: "junnae.dev",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-deep",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
