import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Cell from './Cell';

const Session = ({ inactive, time, speaker, title, span }) => (
  <Cell
    inactive={inactive}
    css={css`
      grid-column: span ${span};
      text-align: center;
    `}
  >
    <h4
      css={css`
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      `}
    >
      {title}
    </h4>
    <div
      css={css`
        display: block;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: normal;
        user-select: text;
      `}
    >
      {speaker}
    </div>
  </Cell>
);

Session.propTypes = {
  inactive: PropTypes.bool,
  time: PropTypes.string,
  speaker: PropTypes.string,
  title: PropTypes.string,
  span: PropTypes.number,
};

Session.defaultProps = {
  span: 1,
};

export default Session;
