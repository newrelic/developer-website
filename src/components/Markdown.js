import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ className, ...props }) => (
  <ReactMarkdown
    {...props}
    className={className}
    css={css`
      > *:first-child {
        margin-top: 0;
      }
    `}
  />
);

Markdown.propTypes = {
  className: PropTypes.string,
};

export default Markdown;
