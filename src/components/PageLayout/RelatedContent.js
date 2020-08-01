import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Button, ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';
import usePageContext from '../../hooks/usePageContext';
import styled from '@emotion/styled';
import Tag from '../Tag';

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
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);
  const { fileRelativePath } = usePageContext();

  const {
    frontmatter: { resources },
    fields: { gitAuthorTime },
  } = page;

  const {
    siteMetadata: { repository },
  } = site;

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
      <Section>
        <h4>Contribute</h4>
        <Button
          as={ExternalLink}
          href={`${repository}/issues/new/choose`}
          css={css`
            margin-right: 0.5rem;
          `}
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.SMALL}
        >
          <Icon
            name={Icon.TYPE.GITHUB}
            css={css`
              margin-right: 0.5rem;
            `}
          />
          File an issue
        </Button>
        <Button
          as={ExternalLink}
          href={`${repository}/tree/main/${fileRelativePath}`}
          variant={Button.VARIANT.NORMAL}
          size={Button.SIZE.SMALL}
        >
          <Icon
            name={Icon.TYPE.EDIT}
            css={css`
              margin-right: 0.5rem;
            `}
          />
          Edit this page
        </Button>
      </Section>

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
                const tag = Object.keys(SITE_TAGS).find((tag) =>
                  resource.url.startsWith(SITE_TAGS[tag])
                );
                const isDeveloperSite = tag === 'developer';

                const url = new URL(resource.url);
                const LinkElement = isDeveloperSite ? Link : ExternalLink;
                const props = isDeveloperSite
                  ? { to: url.pathname }
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

      <Section
        css={css`
          font-size: 0.875rem;
          font-style: italic;
          color: var(--color-neutrals-500);

          .dark-mode & {
            color: var(--color-dark-500);
          }
        `}
      >
        {`Page last modified on ${gitAuthorTime}`}
      </Section>
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
    fields {
      gitAuthorTime(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default RelatedContent;
