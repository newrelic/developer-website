import React from 'react';
import Tabs from '../components/Tabs';

const TabTest = () => (
  <Tabs>
    <Tabs.Bar>
      <Tabs.BarItem>Overview</Tabs.BarItem>
      <Tabs.BarItem count={12}>Dashboards</Tabs.BarItem>
      <Tabs.BarItem count={4}>Alerts</Tabs.BarItem>
      <Tabs.BarItem count={0} disabled>
        Synthetics checks
      </Tabs.BarItem>
    </Tabs.Bar>

    <Tabs.Page>This is the page for overview</Tabs.Page>

    <Tabs.Page>This is the page for dashboards..</Tabs.Page>

    <Tabs.Page>This is the page for aLeRtS</Tabs.Page>
  </Tabs>
);

export default TabTest;
