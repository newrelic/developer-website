import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import { ExternalLink, Icon, Tag } from '@newrelic/gatsby-theme-newrelic';
import Section from './Section';
import Title from './Title';

const SITE_TAGS = {
  developer: 'https://developer.newrelic.com',
  'open source': 'https://opensource.newrelic.com',
  docs: 'https://docs.newrelic.com',
  github: 'https://github.com',
  terraform: 'https://terraform.io',
  kubernetes: 'https://kubernetes.io',
  youtube: 'https://youtube.com',
  discuss: 'https://discuss.newrelic.com',
};

const findTag = (resource) =>
  resource.url.startsWith('/')
    ? 'developer'
    : Object.keys(SITE_TAGS).find((tag) =>
        resource.url.startsWith(SITE_TAGS[tag])
      );

const normalizeDeveloperUrl = (url) =>
  url.replace('https://developer.newrelic.com', '');

const Resources = ({ page }) => {
  const {
    frontmatter: { resources },
  } = page;

  return resources?.length > 0 ? (
    <Section>
      <Title>Related resources</Title>
      <nav>
        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {resources.map((resource) => {
            const tag = findTag(resource);
            const isDeveloperSite = tag === 'developer';
            const LinkElement = isDeveloperSite ? Link : ExternalLink;
            const props = isDeveloperSite
              ? { to: normalizeDeveloperUrl(resource.url) }
              : { href: resource.url };

            return (
              <li
                key={resource.url}
                css={css`
                  margin-bottom: 1rem;
                  font-size: 0.875rem;
                `}
              >
                <LinkElement
                  {...props}
                  css={css`
                    display: block;
                    margin-bottom: 0.25rem;
                  `}
                >
                  <span
                    css={css`
                      vertical-align: middle;
                    `}
                  >
                    {resource.title}
                  </span>

                  {!isDeveloperSite && (
                    <Icon
                      name={Icon.TYPE.EXTERNAL_LINK}
                      css={css`
                        margin-left: 0.25rem;
                        vertical-align: middle;
                      `}
                    />
                  )}
                </LinkElement>

                <Tag
                  css={css`
                    text-transform: uppercase;
                  `}
                >
                  {tag}
                </Tag>
              </li>
            );
          })}
        </ul>
      </nav>
    </Section>
  ) : null;
};

Resources.propTypes = {
  page: PropTypes.shape({
    frontmatter: PropTypes.shape({
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  fragment Resources_page on Mdx {
    frontmatter {
      resources {
        title
        url
      }
    }
  }
`;

export default Resources;
