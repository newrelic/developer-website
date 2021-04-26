import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, Link } from 'gatsby';
import {
  ExternalLink,
  Icon,
  Tag,
  PageTools,
} from '@newrelic/gatsby-theme-newrelic';

const SITE_TAGS = {
  developer: 'https://developer.newrelic.com',
  'open source': 'https://opensource.newrelic.com',
  docs: 'https://docs.newrelic.com',
  github: 'https://github.com',
  terraform: 'https://terraform.io',
  kubernetes: 'https://kubernetes.io',
  youtube: 'https://youtube.com',
  discuss: 'https://discuss.newrelic.com',
  blog: 'https://blog.newrelic.com',
  'newrelic.com': 'https://newrelic.com',
  'visual studio': 'https://marketplace.visualstudio.com',
  learn: 'https://learn.newrelic.com',
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
  const { relatedResources, frontmatter } = page;
  const resources = (frontmatter.resources || []).concat(relatedResources);

  return resources.length > 0 ? (
    <PageTools.Section>
      <PageTools.Title>Related resources</PageTools.Title>
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
                  font-size: 0.875rem;

                  &:not(:last-child) {
                    margin-bottom: 1rem;
                  }
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
                      name="fe-external-link"
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
                    font-size: 0.5625rem;
                    letter-spacing: 0.5px;
                  `}
                >
                  {tag}
                </Tag>
              </li>
            );
          })}
        </ul>
      </nav>
    </PageTools.Section>
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
    relatedResources: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
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
    relatedResources(limit: $relatedResourceLimit) {
      title
      url
    }
  }
`;

export default Resources;
