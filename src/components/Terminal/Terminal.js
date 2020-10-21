import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon, Button, useClipboard } from '@newrelic/gatsby-theme-newrelic';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import Shell from './Shell';
import MenuBar from './MenuBar';
import { useIntersection } from 'react-use';

const Terminal = ({ animate, children }) => {
  const ref = useRef();
  const shellRef = useRef();
  const code = children.trim();
  const [copied, copy] = useClipboard();
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px 0px -50% 0px',
  });

  useEffect(() => {
    if (animate && intersection?.isIntersecting) {
      shellRef.current.startAnimation();
    }
  }, [animate, intersection]);

  return (
    <div
      ref={ref}
      css={css`
        --chrome-color: #252526;
        --border-radius: 0.25rem;

        background: #1e1e1e;
        border-radius: var(--border-radius);
      `}
    >
      <MenuBar />
      <Highlight Prism={Prism} code={code} language="shell">
        {(highlight) => (
          <Shell
            ref={shellRef}
            animate={animate}
            code={code}
            highlight={highlight}
          />
        )}
      </Highlight>
    </div>
  );
};

const filterCopyOutput = (commands) => {
  return commands
    .split('\n')
    .filter((line) => !line.startsWith('[output]'))
    .join('\n');
};

const FrameButton = ({ color }) => (
  <div
    css={css`
      background: ${color};
      border-radius: 50%;
      width: 10px;
      height: 10px;
    `}
  />
);

FrameButton.propTypes = {
  color: PropTypes.string,
};

Terminal.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.string,
};

Terminal.defaultProps = {
  animate: false,
};

export default Terminal;
