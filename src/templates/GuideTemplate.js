import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import MDXContainer from '../components/MDXContainer';

import FeatherIcon from '../components/FeatherIcon';
import RelatedContent from '../components/RelatedContent';
import PageTitle from '../components/PageTitle';
import SEO from '../components/Seo';

const GuideTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, description, duration } = frontmatter;

  return (
    <>
      <SEO title={title} description={description} />
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'page-title page-title'
            'content related-content';
          grid-template-columns: minmax(0, 1fr) auto;
          grid-gap: 2rem;

          @media (max-width: 1240px) {
            grid-template-areas:
              'page-title'
              'content';
            grid-template-columns: minmax(0, 1fr);
            grid-gap: 0;
          }
        `}
      >
        <div
          css={css`
            grid-area: page-title;
            border-bottom: 1px solid var(--divider-color);
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media screen and (max-width: 1080px) {
              flex-direction: column;
              align-items: flex-start;
            }
          `}
        >
          <PageTitle>{title}</PageTitle>
          {duration && (
            <div
              css={css`
                display: flex;
                align-items: center;
                color: var(--secondary-text-color);
                white-space: nowrap;
              `}
            >
              <FeatherIcon
                name="clock"
                css={css`
                  margin-right: 0.25rem;
                `}
              />
              {duration}
            </div>
          )}
        </div>
        <MDXContainer
          css={css`
            grid-area: content;
          `}
        >
          {body}
        </MDXContainer>
        <RelatedContent
          page={mdx}
          css={css`
            grid-area: related-content;
            position: sticky;
            top: calc(var(--global-header-height) + 2rem);
            align-self: start;

            @media (max-width: 1240px) {
              display: none;
            }
          `}
        />
      </div>
    </>
  );
};

GuideTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        duration
        path
        title
        description
      }

      ...RelatedContent_page
    }
  }
`;

export default GuideTemplate;
