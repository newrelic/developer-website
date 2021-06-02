import React from 'react';
import PropTypes from 'prop-types';

import useTabs from './useTabs';

const BarItem = ({ index, children, id, count, disabled }) => {
  const [currentTab, setCurrentTab] = useTabs();

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <div
      onClick={() => !disabled && setCurrentTab(id)}
      style={{ textDecoration: disabled ? 'line-through' : 'normal' }}
    >
      {isSelected && <span>+</span>}
      <span>{children}</span>
      {count && <span>{count}</span>}
    </div>
  );
};

BarItem.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number,
  disabled: PropTypes.bool,
};

export default BarItem;
