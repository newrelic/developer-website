import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { PageUpdated, Resources } from '../components/RelatedContentModules';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import SEO from '../components/Seo';
import {
  ContributingGuidelines,
  Layout,
  SimpleFeedback,
} from '@newrelic/gatsby-theme-newrelic';

const GuideTemplate = ({ data }) => {
  const { mdx } = data;
  const {
    frontmatter,
    body,
    fields: { fileRelativePath },
  } = mdx;
  const { title, description, duration, tags, path } = frontmatter;

  return (
    <>
      <SEO title={title} description={description} tags={tags} />
      <PageLayout type={PageLayout.TYPE.RELATED_CONTENT}>
        <PageLayout.Header title={title}>
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
        </PageLayout.Header>
        <PageLayout.MarkdownContent>{body}</PageLayout.MarkdownContent>
        <Layout.PageTools>
          <ContributingGuidelines fileRelativePath={fileRelativePath} />
          <Resources page={mdx} />
          <SimpleFeedback
            pageTitle={title}
            slug={path}
            labels={['content', 'feedback']}
          />
          <PageUpdated page={mdx} />
        </Layout.PageTools>
      </PageLayout>
    </>
  );
};

GuideTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!, $relatedResourceLimit: Int!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        duration
        path
        title
        description
        tags
      }
      fields {
        fileRelativePath
      }

      ...Resources_page
      ...PageUpdated_page
    }
  }
`;

export default GuideTemplate;
