import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './SideBySide.module.scss';

const SideBySide = ({ className, children, type, dir }) => {
  const childObjects = React.Children.toArray(children);
  const side = childObjects.find((child) => child?.props?.mdxType === type);
  const rest = childObjects.filter((child) => child !== side);

  return (
    <div className={cx(className, styles.container, styles[dir])}>
      <div>{rest}</div>
      {side && <div>{side}</div>}
    </div>
  );
};

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['right', 'left']),
};

SideBySide.defaultProps = {
  dir: 'right',
};

export default SideBySide;
