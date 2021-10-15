import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import * as overviewStyles from './OverviewTemplate.module.scss';
import * as labOverviewStyles from './LabOverviewTemplate.module.scss';

import DevSiteSeo from '../components/DevSiteSeo';

const LabOverviewTemplate = ({ data, location }) => {
  const { mdx, guides } = data;
  const { frontmatter, body } = mdx;
  const { title, description } = frontmatter;
  console.log(guides?.nodes);

  function sortProcedures(a, b) {
    if (a.frontmatter.procIdx > b.frontmatter.procIdx) {
      return 1;
    }

    if (a.frontmatter.procIdx < b.frontmatter.procIdx) {
      return -1;
    }

    return 0;
  }

  return (
    <>
      <DevSiteSeo title={title} description={description} location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={title} />
        <PageLayout.Content>
          <MDXContainer>{body}</MDXContainer>
          {!!guides?.nodes.length && (
            <>
              <h2 className={overviewStyles.subtitle}>Procedures</h2>
              <GuideListing className={overviewStyles.guideListing}>
                <GuideListing.List className={labOverviewStyles.labGuideList}>
                  {guides?.nodes
                    .sort(sortProcedures)
                    .map(({ frontmatter }, index) => (
                      <GuideTile
                        className={labOverviewStyles.labGuideCard}
                        to={frontmatter.path}
                        key={index}
                        duration={frontmatter.duration}
                        title={`${frontmatter.procIdx}. ${
                          frontmatter.tileShorthand?.title || frontmatter.title
                        }`}
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
