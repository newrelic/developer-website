import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const styles = {
  stem: css`
    fill: none;
    stroke: currentColor;
    stroke-width: 0.5;
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
    stroke-width: 0.5;
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
      <g transform="translate(-76 -677)">
        <g transform="translate(78 679)">
          <path d="M11.6 1.9h-1.4" css={styles.stem} />
          <g>
            <path
              d="M13 1.7c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7s.3.7.7.7c.4 0 .7-.3.7-.7"
              css={styles.stemOutline}
            />
            <path
              d="M13 1.7c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7s.3.7.7.7c.4 0 .7-.3.7-.7z"
              css={styles.main}
            />
            <path d="M11.7 10.1h-1.6" css={styles.stem} />
            <path
              d="M13 10.1c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7s.3.7.7.7c.4 0 .7-.3.7-.7"
              css={styles.stemOutline}
            />
            <path
              d="M13 10.1c0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7s.3.7.7.7c.4 0 .7-.3.7-.7z"
              css={styles.main}
            />
            <path d="M.3 6.1h1.6" css={styles.stem} />
            <path
              d="M-1 6.1c0 .4.3.7.7.7.4 0 .7-.3.7-.7s-.4-.7-.7-.7c-.4 0-.7.3-.7.7"
              css={styles.stemOutline}
            />
            <path
              d="M-1 6.1c0 .4.3.7.7.7.4 0 .7-.3.7-.7s-.4-.7-.7-.7c-.4 0-.7.3-.7.7z"
              css={styles.main}
            />
            <path
              d="M2 0v3c0 .6 1.6 1.4 4 1.4 2.5 0 4-.8 4-1.4V0"
              css={styles.main}
            />
            <path
              d="M6.1 8.6c2.5 0 4-.8 4-1.4V4.3c-.9.6-2.5 1-4.1 1-1.5 0-3.1-.3-4-1v3c0 .5 1.6 1.3 4.1 1.3z"
              css={styles.main}
            />
            <path
              d="M6.1 9.6c-1.6 0-3.2-.3-4.1-1V11c0 1.3 2.1 2 4.1 2 2 0 4.1-.7 4.1-2V8.6c-1 .7-2.6 1-4.1 1z"
              css={styles.main}
            />
            <path
              d="M10.1 0c0 .6-1.8 1-4.1 1S2 .6 2 0s1.8-1 4.1-1 4 .5 4 1z"
              css={styles.main}
            />
          </g>
        </g>
      </g>
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
