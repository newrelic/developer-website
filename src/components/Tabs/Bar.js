import React from 'react';
import PropTypes from 'prop-types';
import useMobileDetect from 'use-mobile-detect-hook';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const MobileTabControl = ({ children }) => {
  const [currentTab, setCurrentTab] = useTabs();

  return (
    <select
      onChange={(e) => setCurrentTab(e.target.value)}
      css={css`
        width: 100%;
        margin-bottom: 1em;
        padding: 0.5em;
        border-radius: 4px;
        border-color: var(--secondary-background-color);
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      `}
    >
      {React.Children.map(children, ({ props }) => (
        <option
          key={props.id}
          value={props.id}
          selected={props.id === currentTab}
          disabled={props.disabled}
        >
          {props.children}
          {(props.count || props.count === 0) && ` (${props.count})`}
        </option>
      ))}
    </select>
  );
};

const Bar = ({ children }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  if (isMobile) {
    return <MobileTabControl children={children} />;
  }

  return (
    <div
      role="tablist"
      css={css`
        display: flex;
        margin-bottom: 1em;
        overflow: scroll;
      `}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ...child.props, index })
      )}
    </div>
  );
};

Bar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bar;
