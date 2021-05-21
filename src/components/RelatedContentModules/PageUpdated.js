import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { PageTools } from '@newrelic/gatsby-theme-newrelic';

const PageUpdated = ({ page }) => {
  const {
    fields: { gitAuthorTime },
  } = page;

  // If there is no date available, do not render the component
  if (gitAuthorTime === 'Invalid date') return null;

  return (
    <PageTools.Section
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
    </PageTools.Section>
  );
};

PageUpdated.propTypes = {
  page: PropTypes.shape({
    fields: PropTypes.shape({
      gitAuthorTime: PropTypes.string,
    }),
  }),
};

export const query = graphql`
  fragment PageUpdated_page on Mdx {
    fields {
      gitAuthorTime(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default PageUpdated;
