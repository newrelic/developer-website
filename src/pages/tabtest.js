import React from 'react';
import Tabs from '../components/Tabs';

const TabTest = () => (
  <Tabs>
    <Tabs.Bar>
      <Tabs.BarItem id="overview">Overview</Tabs.BarItem>
      <Tabs.BarItem id="dependencies">Dependencies</Tabs.BarItem>
      <Tabs.BarItem id="dashboards" count={12}>
        Dashboards
      </Tabs.BarItem>
      <Tabs.BarItem id="alerts" count={4}>
        Alerts
      </Tabs.BarItem>
      <Tabs.BarItem id="synthetics" count={0} disabled>
        Synthetics checks
      </Tabs.BarItem>
      <Tabs.BarItem id="visualizations" count={0} disabled>
        Visualizations
      </Tabs.BarItem>
      <Tabs.BarItem id="applications" count={4}>
        Applications
      </Tabs.BarItem>
    </Tabs.Bar>

    <Tabs.Pages>
      <Tabs.Page id="overview">This is the page for overview</Tabs.Page>

      <Tabs.Page id="dashboards">This is the page for dashboards..</Tabs.Page>

      <Tabs.Page id="alerts">This is the page for aLeRtS</Tabs.Page>
    </Tabs.Pages>
  </Tabs>
);

export default TabTest;
