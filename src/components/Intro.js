import React from 'react';
import { css } from '@emotion/react';
import SideBySide from './SideBySide';
import PropTypes from 'prop-types';

const Intro = ({ className, children, type }) => (
  <SideBySide
    type={type}
    className={className}
    css={css`
      color: var(--secondary-text-color);
      font-size: 1.125rem;
      line-height: 1.75;

      li:not(:last-child) {
        margin-bottom: 0.5rem !important;
      }
    `}
  >
    {children}
  </SideBySide>
);

// Only video or code is supported at the moment
const SUPPORTED_TYPES = PropTypes.oneOf(['Video', 'pre']);

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  // either a single supported type, or an array of supported types
  type: PropTypes.oneOfType([
    SUPPORTED_TYPES,
    PropTypes.arrayOf(SUPPORTED_TYPES),
  ]),
};

Intro.defaultProps = {
  type: 'Video',
};

export default Intro;
