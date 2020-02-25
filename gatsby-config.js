module.exports = {
  siteMetadata: {
    title: 'AR develop',
    author: 'Alex Renin',
  },
  plugins: [
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          }
      },
  ]
}
