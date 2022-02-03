import React from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import MDXContainer from '../components/MDXContainer';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile/GuideTile';
import * as labOverviewStyles from './LabOverviewTemplate.module.scss';

import DevSiteSeo from '../components/DevSiteSeo';

const LabOverviewTemplate = ({ data, location }) => {
  const { mdx, guides } = data;
  const { frontmatter, body } = mdx;
  const { title, description } = frontmatter;

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
              <h2
                css={css`
                  margin-top: 2rem;
                `}
              >
                Procedures
              </h2>
              <GuideListing.List className={labOverviewStyles.labGuideList}>
                {guides?.nodes
                  .sort(sortProcedures)
                  .map(({ fields, frontmatter }, index) => {
                    const procIdxIsInteger = Number.isInteger(
                      frontmatter.procIdx
                    );
                    return (
                      <GuideTile
                        procIdxIsInteger={procIdxIsInteger}
                        className={labOverviewStyles.labGuideCard}
                        to={fields.slug}
                        key={index}
                        duration={frontmatter.duration}
                        title={`${
                          procIdxIsInteger ? `${frontmatter.procIdx}.` : ''
                        } ${
                          frontmatter.tileShorthand?.title || frontmatter.title
                        }`}
                        description={
                          frontmatter.tileShorthand?.description ||
                          frontmatter.description
                        }
                      />
                    );
                  })}
              </GuideListing.List>
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
        fields: { slug: { glob: $guidesFilter } }
        frontmatter: { template: { eq: "GuideTemplate" } }
      }
    ) {
      nodes {
        fields {
          slug
        }
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
