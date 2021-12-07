import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import { PageUpdated } from '../components/RelatedContentModules';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import DevSiteSeo from '../components/DevSiteSeo';
import {
  ContributingGuidelines,
  Layout,
  RelatedResources,
  SimpleFeedback,
} from '@newrelic/gatsby-theme-newrelic';

const GuideTemplate = ({ data, location }) => {
  const { mdx } = data;
  const {
    frontmatter,
    body,
    relatedResources,
    fields: { fileRelativePath, slug },
  } = mdx;
  const { title, description, duration, tags } = frontmatter;

  return (
    <>
      <DevSiteSeo
        title={title}
        description={description}
        tags={tags}
        location={location}
      />
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
              {duration} min
            </div>
          )}
        </PageLayout.Header>
        <PageLayout.MarkdownContent>{body}</PageLayout.MarkdownContent>
        <Layout.PageTools>
          <SimpleFeedback
            pageTitle={title}
            slug={slug}
            labels={['content', 'feedback']}
          />
          <ContributingGuidelines fileRelativePath={fileRelativePath} />
          <RelatedResources resources={relatedResources} />
          <PageUpdated page={mdx} />
        </Layout.PageTools>
      </PageLayout>
    </>
  );
};

GuideTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        duration
        title
        description
        tags
      }
      fields {
        fileRelativePath
        slug
      }
      relatedResources(limit: 5) {
        title
        url
      }

      ...PageUpdated_page
    }
  }
`;

export default GuideTemplate;
