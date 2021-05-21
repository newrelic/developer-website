import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Markdown from 'react-markdown';

const Content = ({ children, ...props }) => {
  if (Children.toArray(children).length === 0) {
    return null;
  }

  return (
    <span
      {...props}
      css={css`
        color: var(--color-nord-3);

        > p {
          display: inline;
        }

        code {
          color: var(--color-nord-4) !important;
          background: var(--color-nord-2) !important;
        }
      `}
    >
      {`//`} {children}
    </span>
  );
};

const renderers = {
  root: Content,
};

const Comment = ({ text }) => <Markdown source={text} renderers={renderers} />;

Content.propTypes = {
  children: PropTypes.node,
};

Comment.propTypes = {
  text: PropTypes.string,
};

export default Comment;
