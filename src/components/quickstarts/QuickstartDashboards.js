import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import Intro from '../Intro';
import ImageSlider from '../ImageSlider';
import { quickstart } from '../../types';

const QuickstartDashboards = ({ quickstart }) => (
  <>
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {quickstart.name} quickstart contains{' '}
      {pluralize('dashboard', quickstart.dashboards?.length ?? 0, true)}. These
      interactive visualizations let you easily explore your data, understand
      context, and resolve problems faster.
    </Intro>

    {quickstart.dashboards.map((dashboard, index) => (
      <div key={index}>
        <h3>{dashboard.name}</h3>
        {dashboard.description && <p>{dashboard.description}</p>}
        <ImageSlider height={400} images={dashboard.screenshots} />
      </div>
    ))}
  </>
);

QuickstartDashboards.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartDashboards;
