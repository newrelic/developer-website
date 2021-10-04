import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import * as styles from './LabOverviewTemplate.module.scss';

import DevSiteSeo from '../components/DevSiteSeo';

const LabOverviewTemplate = ({ data, location }) => {
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
              <h2 className={styles.subtitle}>Procedures</h2>
              <GuideListing className={styles.guideListing}>
                <GuideListing.List className={styles.labGuideList}>
                  {guides?.nodes.sort((a, b) => a.frontmatter.procIdx > b.frontmatter.procIdx ? 1 : (a.frontmatter.procIdx < b.frontmatter.procIdx ? -1 : 0)).map(({ frontmatter }, index) => (
                    <GuideTile
                      className={styles.labGuideCard}
                      to={frontmatter.path}
                      key={index}
                      duration={frontmatter.duration}
                      title={
                        frontmatter.procIdx + ". " + (frontmatter.tileShorthand?.title || frontmatter.title)
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

LabOverviewTemplate.propTypes = {
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
          procIdx
          tileShorthand {
            title
            description
          }
        }
      }
    }
  }
`;

export default LabOverviewTemplate;
