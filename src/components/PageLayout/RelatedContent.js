import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import usePageContext from '../../hooks/usePageContext';

const RelatedContent = ({ page, modules }) => {
  const pageContext = usePageContext();

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
      {modules.map((Module, idx) => (
        <Module key={idx} page={page} pageContext={pageContext} />
      ))}
    </aside>
  );
};

RelatedContent.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  page: PropTypes.object.isRequired,
};

export default RelatedContent;
