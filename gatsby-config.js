module.exports = {
  siteMetadata: {
    title: "Modern Life Massage",
    description: "Modern Life Massage Therapy, massage that is simply better.",
    siteUrl: `https://jovial-aryabhata-f7c70f.netlify.app/`,
    keywords: `massage, therapy, appointment, lexington, kentucky`,
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
