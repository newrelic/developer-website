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
      {validMetadata.map((data, index) => (
        <meta key={`${data.name}-${index}`} {...data} />
      ))}
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
};

export default DevSiteSeo;
