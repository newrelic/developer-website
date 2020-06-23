module.exports = {
  siteMetadata: {
    title: 'New Relic Developers',
    description:
      'Do more on our platform and make New Relic your own with APIs, SDKs, code snippets, tutorials, and more developer tools.',
    author: 'New Relic',
    siteUrl: 'https://developer.newrelic.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-remark-images',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W77XWWH',
        includeInDevelopment: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://developer.newrelic.com',
        sitemap: 'https://developer.newrelic.com/sitemap.xml',
        // NOTE: policy.disallow can take an array of pages or
        // directories for web crawlers to  ignore.
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-use-dark-mode',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-meta-redirect',
  ],
};
