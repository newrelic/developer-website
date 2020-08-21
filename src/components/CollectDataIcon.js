import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const styles = {
  stem: css`
    fill: none;
    stroke: currentColor;
    stroke-linecap: square;
    stroke-linejoin: round;
  `,
  stemOutline: css`
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: currentColor;
  `,
  main: css`
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
  `,
};

const CollectDataIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 16 16"
    xmlSpace="preserve"
    className={className}
    css={css`
      width: ${size};
      height: ${size};
    `}
  >
    <g>
      <path css={styles.stem} d="M13.6 3.8h-1.4" />
      <path
        css={styles.stemOutline}
        d="M15 3.8c0-.4-.3-.7-.7-.7s-.7.3-.7.7.3.7.7.7.7-.3.7-.7"
      />
      <path
        css={styles.main}
        d="M15 3.8c0-.4-.3-.7-.7-.7s-.7.3-.7.7.3.7.7.7.7-.3.7-.7z"
      />
      <path css={styles.stem} d="M13.8 12.2h-1.6" />
      <path
        css={styles.stemOutline}
        d="M15 12.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7.3.7.7.7.7-.3.7-.7"
      />
      <path
        css={styles.main}
        d="M15 12.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7.3.7.7.7.7-.3.7-.7z"
      />
      <path css={styles.stem} d="M2.3 8.2h1.6" />
      <path
        css={styles.stemOutline}
        d="M1 8.2c0 .4.3.7.7.7s.7-.3.7-.7c0-.4-.4-.7-.7-.7-.4 0-.7.3-.7.7"
      />
      <path
        css={styles.main}
        d="M1 8.2c0 .4.3.7.7.7s.7-.3.7-.7c0-.4-.4-.7-.7-.7-.4 0-.7.3-.7.7z"
      />
      <path
        css={styles.main}
        d="M4 1.6v3C4 5.2 5.6 6 8 6c2.5 0 4-.8 4-1.4v-3"
      />
      <path
        css={styles.main}
        d="M8.1 10.7c2.5 0 4-.8 4-1.4V6.4c-.9.6-2.5 1-4.1 1-1.5 0-3.1-.3-4-1v3c0 .5 1.6 1.3 4.1 1.3z"
      />
      <path
        css={styles.main}
        d="M8.1 12.1c-1.6 0-3.2-.3-4.1-1v2.4c0 1.3 2.1 2 4.1 2s4.1-.7 4.1-2v-2.4c-1 .7-2.6 1-4.1 1z"
      />
      <path
        css={styles.main}
        d="M12.1 1.6c0 .6-1.8 1-4.1 1s-4-.4-4-1 1.8-1 4.1-1 4 .5 4 1z"
      />
    </g>
  </svg>
);

CollectDataIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

CollectDataIcon.defaultProps = {
  size: '1em',
};

export default CollectDataIcon;
