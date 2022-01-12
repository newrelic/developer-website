import React from 'react';
import PropTypes from 'prop-types';
import { SEO } from '@newrelic/gatsby-theme-newrelic';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

function DevSiteSeo({ description, meta, title, tags, location, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const crazyEgg = (location) => {
    const crazyEggPathnames = [
      '/',
      '/instant-observability/',
      '/instant-observability/node-js/01fdea36-5a15-44b4-a864-c4c99866735b/',
      '/instant-observability/php/475dec69-10c9-4bc6-8312-3caa266fb028/',
      '/instant-observability/apache/ad5affab-545a-4355-ad48-cfd66e2fbf00/',
      '/instant-observability/java/3ebfb315-d0a6-4b27-9f89-b16a9a1ada5f/',
      '/instant-observability/dotnet/2dff13b6-0fac-43a6-abc6-57f0a3299639/',
      '/instant-observability/codestream/29bd9a4a-1c19-4219-9694-0942f6411ce7/',
    ];
    if (crazyEggPathnames.includes(location.pathname))
      return (
        <script
          type="text/javascript"
          src="//script.crazyegg.com/pages/scripts/0045/9836.js"
          async="async"
        />
      );
  };

  const metaDescription = description || site.siteMetadata.description;

  const globalMetadata = [
    { name: 'description', content: metaDescription },
    { 'http-equiv': 'Content-Type', content: 'text/html', charset: 'utf-8' },

    {
      name: 'google-site-verification',
      content: 'He_vizRXYX_mUhwBe3BmyaMxNnVRAZbq_Jtm2A0e4WY',
    },
  ];

  const social = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: site.siteMetadata.author },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: metaDescription },
  ];

  // if we decide we need this elsewhere, abstract into gatsby-theme-newrelic
  const swiftype = [
    {
      name: 'title',
      class: 'swiftype',
      'data-type': 'string',
      content: title,
    },
    {
      name: 'document_type',
      class: 'swiftype',
      'data-type': 'enum',
      content: 'page',
    },
    {
      name: 'info',
      class: 'swiftype',
      'data-type': 'string',
      content: description,
    },
    ...(tags ?? []).map((tag) => ({
      name: 'tags',
      class: 'swiftype',
      'data-type': 'string',
      content: tag,
    })),
  ];

  // only add metadata if we have content
  const validMetadata = [
    ...globalMetadata,
    ...social,
    ...meta,
    ...swiftype,
  ].filter((m) => m.content !== '');

  return (
    <SEO location={location} title={title} type={type}>
      {crazyEgg(location)}
      {validMetadata.map((data, index) => (
        <meta key={`${data.name}-${index}`} {...data} />
      ))}
      <script src={withPrefix('tessen.min-1.3.0.js')} type="text/javascript" />
    </SEO>
  );
}

DevSiteSeo.defaultProps = {
  meta: [],
  description: '',
};

DevSiteSeo.propTypes = {
  location: PropTypes.object.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  quickStartName: PropTypes.string,
};

export default DevSiteSeo;
