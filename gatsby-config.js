// gatsby-config.js

module.exports = {
  siteMetadata: {
    siteName: `The Undefined Podcast`,
    siteUrl: `https://theundefined.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://theundefined.io`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#000`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    // `gatsby-plugin-catch-links`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-55176740-4',
    //   },
    // },

    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
