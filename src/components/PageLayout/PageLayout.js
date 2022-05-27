import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Header from './Header';
import MarkdownContent from './MarkdownContent';
import Context from './Context';
import { Layout, useLayout } from '@newrelic/gatsby-theme-newrelic';

const TYPES = {
  SINGLE_COLUMN: 'SINGLE_COLUMN',
  RELATED_CONTENT: 'RELATED_CONTENT',
  RELATED_CONTENT_TABS: 'RELATED_CONTENT_TABS',
};

const LAYOUTS = {
  [TYPES.RELATED_CONTENT]: css`
    grid-template-areas:
      'page-header page-header'
      'content page-tools';
    grid-template-columns: minmax(0, 1fr) 320px;
    grid-gap: 2rem;

    @media (max-width: 1240px) {
      grid-template-areas:
        'page-header'
        'content'
        'page-tools';
      grid-template-columns: minmax(0, 1fr);
    }
  `,
  [TYPES.RELATED_CONTENT_TABS]: css`
    grid-template-areas:
      'page-header page-header'
      'tabs tabs'
      'content page-tools';
    grid-template-columns: minmax(0, 1fr) 320px;
    grid-gap: 2rem;

    @media (max-width: 1240px) {
      grid-template-areas:
        'page-header'
        'tabs'
        'content'
        'page-tools';
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

const PageLayout = ({ children, type, className }) => {
  const { contentPadding } = useLayout();

  return (
    <div
      className={className}
      css={css`
        display: grid;
        grid-gap: ${contentPadding};
        ${LAYOUTS[type]};
      `}
    >
      <Context.Provider value={type}>{children}</Context.Provider>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
};

PageLayout.TYPE = TYPES;

PageLayout.Content = Layout.Content;
PageLayout.Context = Context;
PageLayout.Header = Header;
PageLayout.MarkdownContent = MarkdownContent;

export default PageLayout;
