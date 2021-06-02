import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TabsContext from './Context';

import Bar from './Bar';
import BarItem from './BarItem';
import Pages from './Pages';
import Page from './Page';

const Tabs = ({ children }) => {
  const tabState = useState(undefined);

  return (
    <TabsContext.Provider value={tabState}>{children}</TabsContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

Tabs.Bar = Bar;
Tabs.BarItem = BarItem;
Tabs.Pages = Pages;
Tabs.Page = Page;

export default Tabs;
