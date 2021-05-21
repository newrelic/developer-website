import React, { cloneElement, Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Heading from './Heading';
import Session from './Session';
import Time from './Time';
import useMedia from 'use-media';

const hasOwnProperty = Object.prototype.hasOwnProperty;

const Agenda = ({ children, className, tracks, mobileBreakpoint }) => {
  const isMobileScreen = useMedia({ maxWidth: mobileBreakpoint });

  const sessionsByTime = Children.toArray(children)
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

        @media screen and (max-width: ${mobileBreakpoint}) {
          grid-template-columns: 1fr;
        }
      `}
    >
      {!isMobileScreen && (
        <>
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
        </>
      )}

      {Array.from(sessionsByTime).map(([time, sessions]) => (
        <Fragment key={time}>
          {!isMobileScreen && (
            <Time inactive={sessions[0].props.inactive}>{time}</Time>
          )}
          {sessions.map((session, idx) => {
            const trackIdx = sessions
              .slice(0, idx)
              .reduce((memo, session) => memo + session.props.span, 0);

            return cloneElement(session, {
              isMobileScreen,
              track: hasOwnProperty.call(session.props, 'track')
                ? session.props.track
                : tracks[trackIdx],
            });
          })}
        </Fragment>
      ))}
    </div>
  );
};

Agenda.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tracks: PropTypes.arrayOf(PropTypes.string).isRequired,
  mobileBreakpoint: PropTypes.string,
};

Agenda.Session = Session;

export default Agenda;
