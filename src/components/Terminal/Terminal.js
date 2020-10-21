import React from 'react';
import PropTypes from 'prop-types';
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
