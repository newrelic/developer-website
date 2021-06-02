import React from 'react';
import PropTypes from 'prop-types';

const BarItem = ({ children, count, disabled }) => (
  <div>
    <span>{children}</span>
    {count && <span>{count}</span>}
  </div>
);

BarItem.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  disabled: PropTypes.bool,
};

export default BarItem;
