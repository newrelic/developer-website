const quote = (str) => `"${str}"`;

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
        splitio: {
          core: {
            authorizationKey: process.env.SPLITIO_AUTH_KEY,
          },
          env: {
            development: {
              features: {
                'developer-website_global-header-gh-buttons': 'on',
                'developer-website_right-rail-buttons': 'outline',
              },
              core: {
                authorizationKey: process.env.SPLITIO_AUTH_KEY || 'localhost',
              },
            },
          },
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
    {
      resolve: 'gatsby-source-swiftype',
      options: {
        file: `${__dirname}/src/data/related-pages.json`,
        refetch: Boolean(process.env.BUILD_RELATED_CONTENT),
        engineKey: 'Ad9HfGjDw4GRkcmJjUut',
        limit: 5,
        getPath: ({ node }) => node.frontmatter.path,
        getParams: ({ node }) => {
          const {
            tags,
            title,
            redirects = [],
            resources = [],
          } = node.frontmatter;

          const filteredUrls = resources
            .map((resource) => resource.url)
            .concat(redirects);

          return {
            q: tags ? tags.map(quote).join(' OR ') : title,
            search_fields: {
              page: ['tags^10', 'body^5', 'title^1.5', '*'],
            },
            filters: {
              page: {
                type: ['!blog', '!forum'],
                url: filteredUrls.map((url) =>
                  url.startsWith('/')
                    ? `!https://developer.newrelic.com${url}`
                    : `!${url}`
                ),
                document_type: [
                  '!views_page_menu',
                  '!term_page_api_menu',
                  '!term_page_landing_page',
                ],
              },
            },
          };
        },
        filterNode: ({ node }) => node.frontmatter.template === 'GuideTemplate',
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
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
              icon: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
};
