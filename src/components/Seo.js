import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

function SEO({ description, lang, meta, title, tags }) {
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

  const metaTitle = site.siteMetadata.title || '';
  const metaDescription = description || site.siteMetadata.description;

  const globalMetadata = [
    { name: 'description', content: metaDescription },
    { 'http-equiv': 'Content-Type', content: 'text/html', charset: 'utf-8' },

    {
      name: 'google-site-verification',
      content: 'eT8TSNhvMuDmAtqbtq5jygZKVkhDmz565fYQ3DVop4g',
    },
  ];

  const social = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: site.siteMetadata.author },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: metaDescription },
  ];

  // if we decide we need this elsewhere, abstract into gatsby-theme-newrelic
  const swiftype = [
    {
      name: 'type',
      class: 'swiftype',
      'data-type': 'enum',
      content: 'developer',
    },
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
    <Helmet
      htmlAttributes={{ lang }}
      title={title || metaTitle}
      titleTemplate={title ? `%s | ${metaTitle}` : metaTitle}
      meta={validMetadata}
    >
      <script src={withPrefix('tessen.min-1.3.0.js')} type="text/javascript" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
