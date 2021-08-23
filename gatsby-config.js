module.exports = {
  siteMetadata: {
    title: "Modern Life Massage",
    siteUrl: `https://jovial-aryabhata-f7c70f.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cms_images",
        path: "./images/uploads/",
      },
    },
  ],
};
