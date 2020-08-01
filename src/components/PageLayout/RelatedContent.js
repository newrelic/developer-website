import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import { Contribute, PageUpdated, Resources } from '../RelatedContentModules';

const RelatedContent = ({ page }) => {
  return (
    <aside
      data-swiftype-index={false}
      css={css`
        grid-area: related-content;
        position: sticky;
        top: calc(var(--global-header-height) + 2rem);
        align-self: start;
        padding: 1rem;
        border: 1px solid var(--divider-color);
        border-radius: 0.25rem;
      `}
    >
      <Contribute />
      <Resources page={page} />
      <PageUpdated page={page} />
    </aside>
  );
};

RelatedContent.propTypes = {
  page: PropTypes.object.isRequired,
};

export const query = graphql`
  fragment RelatedContent_page on Mdx {
    ...Resources_page
    ...PageUpdated_page
  }
`;

export default RelatedContent;
