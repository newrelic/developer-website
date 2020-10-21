import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import Shell from './Shell';

const Terminal = ({ children, ...props }) => {
  const code = children.trim();

  return (
    <Highlight Prism={Prism} code={code} language="shell">
      {(highlight) => <Shell {...props} code={code} highlight={highlight} />}
    </Highlight>
  );
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
  copyable: PropTypes.bool,
  children: PropTypes.string,
};

Terminal.defaultProps = {
  animate: false,
  copyable: true,
};

export default Terminal;
