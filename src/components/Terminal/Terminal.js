import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useClipboard } from '@newrelic/gatsby-theme-newrelic';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import Shell from './Shell';

const Terminal = ({ animate, children }) => {
  const code = children.trim();
  const [copied, copy] = useClipboard();

  return (
    <Highlight Prism={Prism} code={code} language="shell">
      {(highlight) => (
        <Shell animate={animate} code={code} highlight={highlight} />
      )}
    </Highlight>
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
