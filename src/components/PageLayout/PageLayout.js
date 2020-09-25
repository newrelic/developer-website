import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Content from './Content';
import Header from './Header';
import MarkdownContent from './MarkdownContent';
import RelatedContent from './RelatedContent';
import Context from './Context';

const TYPES = {
  SINGLE_COLUMN: 'SINGLE_COLUMN',
  RELATED_CONTENT: 'RELATED_CONTENT',
};

const LAYOUTS = {
  [TYPES.RELATED_CONTENT]: css`
    grid-template-areas:
      'page-header page-header'
      'content related-content';
    grid-template-columns: minmax(0, 1fr) 320px;
    grid-gap: 2rem;

    @media (max-width: 1240px) {
      grid-template-areas:
        'page-header'
        'content'
        'related-content';
      grid-template-columns: minmax(0, 1fr);
    }
  `,
  [TYPES.SINGLE_COLUMN]: css`
    grid-template-areas:
      'page-header'
      'content';
    grid-template-columns: minmax(0, 1fr);
  `,
};

const PageLayout = ({ children, type }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

  return (
    <div
      css={css`
        display: grid;
        grid-gap: ${layout.contentPadding};

        ${LAYOUTS[type]};
      `}
    >
      <Context.Provider value={type}>{children}</Context.Provider>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
};

PageLayout.TYPE = TYPES;

PageLayout.Content = Content;
PageLayout.Context = Context;
PageLayout.Header = Header;
PageLayout.MarkdownContent = MarkdownContent;
PageLayout.RelatedContent = RelatedContent;

export default PageLayout;
