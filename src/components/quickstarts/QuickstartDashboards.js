import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import Intro from '../Intro';
import ImageSlider from '../ImageSlider';
import PropTypes from 'prop-types';

const QuickstartDashboards = ({ displayName, dashboards }) => {
  return (
    <>
      <Intro
        css={css`
          margin-bottom: 16px;
        `}
      >
        {displayName} quickstart contains{' '}
        {pluralize('dashboard', dashboards?.length ?? 0, true)}. These
        interactive visualizations let you easily explore your data, understand
        context, and resolve problems faster.
      </Intro>

      {dashboards.map((dashboard) => {
        const previews = dashboard.previews.map((preview) => preview.url);

        return (
          <div
            key={dashboard.displayName}
            css={css`
              &:not(:last-child) {
                border-bottom: 2px solid var(--divider-color);
                margin-bottom: 1rem;
              }
            `}
          >
            <h3>{dashboard.displayName}</h3>
            {dashboard.description && <p>{dashboard.description}</p>}
            <ImageSlider height={400} images={previews} />
          </div>
        );
      })}
    </>
  );
};

QuickstartDashboards.propTypes = {
  dashboards: PropTypes.array,
  displayName: PropTypes.string,
};

export default QuickstartDashboards;
