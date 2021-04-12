module.exports = {
  siteMetadata: {
    title: `Vogt - Innenausbau und Montage`,
    siteUrl: `https://vogt.works`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vogt - Innenausbau und Montage',
        short_name: 'vogt.works',
        start_url: '/',
        background_color: '#2e3141',
        theme_color: '#2e3141',
        display: 'standalone',
        icon: 'src/assets/images/website-icon.png',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://vogt.works',
        sitemap: 'https://vogt.works/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
  ],
};
