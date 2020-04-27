import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Container.scss';

const Container = ({ children, className }) => (
  <div className={cx('u-container', className)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
