import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Cell from './Cell';

const Session = ({
  inactive,
  time,
  speaker,
  title,
  track,
  span,
  isMobileScreen,
}) => (
  <Cell
    inactive={inactive}
    css={css`
      grid-column: span ${isMobileScreen ? 1 : span};
      text-align: center;
    `}
  >
    <h4
      css={css`
        font-size: 0.9rem;
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
    {isMobileScreen && (
      <ul
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 0.5rem;
          padding: 0;
          list-style: none;
          font-size: 0.75rem;
          font-weight: normal;
        `}
      >
        <Badge>{time}</Badge>
        {track && <Badge>{track}</Badge>}
      </ul>
    )}
  </Cell>
);

const Badge = (props) => (
  <li
    css={css`
      color: var(--color-neutrals-700);
      margin: 0 0.25rem;
      padding: 0.125rem 0.5rem;
      background-color: rgba(0, 0, 0, 0.075);
      border-radius: 3.5rem;

      .dark-mode & {
        color: var(--color-dark-700);
        background: var(--color-dark-300);
      }
    `}
    {...props}
  />
);

Session.propTypes = {
  inactive: PropTypes.bool,
  time: PropTypes.string,
  speaker: PropTypes.string,
  title: PropTypes.string,
  span: PropTypes.number,
  track: PropTypes.string,
  isMobileScreen: PropTypes.bool,
};

Session.defaultProps = {
  span: 1,
};

export default Session;
