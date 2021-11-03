import React from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import DevSiteSeo from '../components/DevSiteSeo';

const OverviewTemplate = ({ data, location }) => {
  const { mdx, guides } = data;
  const { frontmatter, body } = mdx;
  const { title, description } = frontmatter;

  return (
    <>
      <DevSiteSeo title={title} description={description} location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={title} />
        <PageLayout.Content>
          <MDXContainer>{body}</MDXContainer>
          {!!guides?.nodes.length && (
            <>
              <h2
                css={css`
                  margin-top: 2rem;
                `}
              >{`Guides to ${title.toLowerCase()}`}</h2>
              <GuideListing
                css={css`
                  margin-top: 2rem;
                `}
              >
                <GuideListing.List>
                  {guides?.nodes.map(({ frontmatter }, index) => (
                    <GuideTile
                      to={frontmatter.path}
                      key={index}
                      duration={frontmatter.duration}
                      title={
                        frontmatter.tileShorthand?.title || frontmatter.title
                      }
                      description={
                        frontmatter.tileShorthand?.description ||
                        frontmatter.description
                      }
                      path={frontmatter.path}
                    />
                  ))}
                </GuideListing.List>
              </GuideListing>
            </>
          )}
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

OverviewTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $guidesFilter: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        path
        title
        description
      }
    }
    guides: allMdx(
      filter: {
        frontmatter: {
          template: { eq: "GuideTemplate" }
          path: { glob: $guidesFilter }
        }
      }
    ) {
      nodes {
        frontmatter {
          path
          title
          description
          duration
          tileShorthand {
            title
            description
          }
        }
      }
    }
  }
`;

export default OverviewTemplate;
