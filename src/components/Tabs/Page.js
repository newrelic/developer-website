import React from 'react';
import PropTypes from 'prop-types';

import useTabs from './useTabs';

const Page = ({ index, children, id }) => {
  const [currentTab] = useTabs();

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <div role="tabpanel" aria-labelledby={id} hidden={!isSelected}>
      {children}
    </div>
  );
};

Page.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Page;
