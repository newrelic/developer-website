import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const List = ({ children, className }) => {
  return <div className={cx('GuideListing-list', className)}>{children}</div>;
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default List;
