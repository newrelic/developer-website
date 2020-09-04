import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Heading from './Heading';
import Session from './Session';
import Time from './Time';

const Agenda = ({ children, className, tracks }) => {
  const childrenArray = Children.toArray(children);

  const sessionsByTime = childrenArray
    .filter((child) => child.type === Session)
    .reduce((memo, child) => {
      const { time } = child.props;

      return memo.set(
        time,
        memo.has(time) ? [...memo.get(time), child] : [child]
      );
    }, new Map());

  return (
    <div
      className={className}
      css={css`
        display: grid;
        grid-template-columns: 0.75fr repeat(${tracks.length}, 1fr);
      `}
    >
      <Heading
        css={css`
          grid-column-start: 2;
        `}
      >
        {tracks[0]}
      </Heading>

      {tracks.slice(1).map((track) => (
        <Heading key={track}>{track}</Heading>
      ))}

      {Array.from(sessionsByTime).map(([time, sessions]) => (
        <Fragment key={time}>
          <Time inactive={sessions[0].props.inactive}>{time}</Time>
          {sessions}
        </Fragment>
      ))}
    </div>
  );
};

Agenda.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tracks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Agenda.Session = Session;

export default Agenda;
