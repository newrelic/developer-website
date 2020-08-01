import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Section from './Section';

const PageUpdated = ({ page }) => {
  const {
    fields: { gitAuthorTime },
  } = page;

  return (
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
