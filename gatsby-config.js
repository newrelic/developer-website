module.exports = {
  siteMetadata: {
    title: 'New Relic Developers',
    description:
      'Do more on our platform and make New Relic your own with APIs, SDKs, code snippets, tutorials, and more developer tools.',
    author: 'New Relic',
    repository: 'https://github.com/newrelic/developer-website',
    siteUrl: 'https://developer.newrelic.com',
  },
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        layout: {
          contentPadding: '2rem',
          maxWidth: '1700px',
        },
        newrelic: {
          configs: {
            production: {
              instrumentationType: 'proAndSPA',
              accountId: '10175106',
              trustKey: '1',
              agentID: '22273498',
              licenseKey: '23448da482',
              applicationID: '22273498',
              beacon: 'staging-bam.nr-data.net',
              errorBeacon: 'staging-bam.nr-data.net',
            },
            staging: {
              instrumentationType: 'proAndSPA',
              accountId: '10175106',
              trustKey: '1',
              agentID: '22273531',
              licenseKey: '23448da482',
              applicationID: '22273531',
              beacon: 'staging-bam.nr-data.net',
              errorBeacon: 'staging-bam.nr-data.net',
            },
          },
        },
      },
    },
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/layouts'),
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
              maxHeight: 400,
              maxWidth: 1200,
              fit: 'inside',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
};
