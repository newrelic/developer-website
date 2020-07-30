import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';
import usePageContext from '../../hooks/usePageContext';

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
    fields: { gitAuthorTime },
  } = page;

  const {
    siteMetadata: { repository },
  } = site;

  return (
    <aside
      css={css`
        grid-area: related-content;
        position: sticky;
        top: calc(var(--global-header-height) + 2rem);
        align-self: start;

        @media (max-width: 1240px) {
          display: none;
        }
      `}
    >
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

      <div
        css={css`
          font-size: 0.875rem;
          font-style: italic;
          margin-top: 1rem;
          color: var(--color-neutrals-500);

          .dark-mode & {
            color: var(--color-dark-500);
          }
        `}
      >
        {`Page last modified on ${gitAuthorTime}`}
      </div>
    </aside>
  );
};

RelatedContent.propTypes = {
  page: PropTypes.shape({
    fields: PropTypes.shape({
      gitAuthorTime: PropTypes.string,
    }),
  }),
};

export const query = graphql`
  fragment RelatedContent_page on Mdx {
    fields {
      gitAuthorTime(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default RelatedContent;
