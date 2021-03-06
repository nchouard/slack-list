module.exports = {
  siteMetadata: {
    title: 'SL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'slack-list',
        short_name: 'slack-list',
        start_url: '/',
        background_color: '#363636',
        theme_color: '#1d53aa',
        display: 'standalone'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ],
}
