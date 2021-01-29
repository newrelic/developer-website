import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Description = ({ children, className }) => {
  return (
    <p
      className={className}
      css={css`
        max-width: 800px;
        text-align: center;
        margin-bottom: 7.5rem;
        color: var(--accent-text-color);
      `}
    >
      {children}
    </p>
  );
};

Description.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Description;
