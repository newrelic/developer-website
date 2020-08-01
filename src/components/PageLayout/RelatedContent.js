import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import { ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';
import styled from '@emotion/styled';
import Tag from '../Tag';

import { Contribute, PageUpdated } from '../RelatedContentModules';

const SITE_TAGS = {
  developer: 'https://developer.newrelic.com',
  'open source': 'https://opensource.newrelic.com',
  docs: 'https://docs.newrelic.com',
};

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const RelatedContent = ({ page }) => {
  const {
    frontmatter: { resources },
  } = page;

  return (
    <aside
      data-swiftype-index={false}
      css={css`
        grid-area: related-content;
        position: sticky;
        top: calc(var(--global-header-height) + 2rem);
        align-self: start;
        padding: 1rem;
        border: 1px solid var(--divider-color);
        border-radius: 0.25rem;
      `}
    >
      <Contribute />

      {resources?.length > 0 && (
        <Section>
          <h4>Resources</h4>
          <nav>
            <ul
              css={css`
                list-style: none;
                margin: 0;
                padding: 0;
              `}
            >
              {resources.map((resource) => {
                const tag = resource.url.startsWith('/')
                  ? 'developer'
                  : Object.keys(SITE_TAGS).find((tag) =>
                      resource.url.startsWith(SITE_TAGS[tag])
                    );

                const isDeveloperSite = tag === 'developer';

                const LinkElement = isDeveloperSite ? Link : ExternalLink;
                const props = isDeveloperSite
                  ? {
                      to: resource.url.replace(
                        'https://developer.newrelic.com',
                        ''
                      ),
                    }
                  : { href: resource.url };

                return (
                  <li
                    key={resource.url}
                    css={css`
                      margin-bottom: 1rem;
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
                    <Tag>{tag}</Tag>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Section>
      )}

      <PageUpdated page={page} />
    </aside>
  );
};

RelatedContent.propTypes = {
  page: PropTypes.shape({
    frontmatter: PropTypes.shape({
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    }),
    fields: PropTypes.shape({
      gitAuthorTime: PropTypes.string,
    }),
  }),
};

export const query = graphql`
  fragment RelatedContent_page on Mdx {
    frontmatter {
      resources {
        title
        url
      }
    }

    ...PageUpdated_page
  }
`;

export default RelatedContent;
