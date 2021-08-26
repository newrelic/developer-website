import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const DividingLine = ({ color, darkModeColor, height }) => (
  <hr
    css={css`
      background-color: ${color || 'var(--color-neutrals-700)'};
      height: ${height || '2px'};
      margin-bottom: 1rem;

      .dark-mode & {
        background-color: ${darkModeColor || 'var(--color-neutrals-100)'};
      }
    `}
  />
);

DividingLine.propTypes = {
  color: PropTypes.string,
  darkModeColor: PropTypes.string,
  height: PropTypes.string,
};

export default DividingLine;
