import React from 'react';
import PropTypes from 'prop-types';
import useMobileDetect from 'use-mobile-detect-hook';
import { css } from '@emotion/react';
import useTabs from './useTabs';

const MobileTabControl = ({ children, isIos }) => {
  const [currentTab, setCurrentTab] = useTabs();
  // eslint gets angry about using props from React.Children.map
  return (
    <select
      onChange={(e) => {
        setCurrentTab(e.target.value);
      }}
      css={css`
        width: 100%;
        margin-bottom: 1em;
        padding: 0.5em;
        border-radius: 4px;
        border-color: var(--secondary-background-color);
        background-color: var(--primary-background-color);
        color: ${isIos ? `var(--color-black)` : `var(--primary-text-color)`};
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

MobileTabControl.propTypes = {
  children: PropTypes.node.isRequired,
  isIos: PropTypes.bool,
};

const Bar = ({ children, className }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  const isIos = detectMobile.isIos();

  if (isMobile) {
    return <MobileTabControl isIos={isIos}>{children}</MobileTabControl>;
  }

  return (
    <div
      className={className}
      role="tablist"
      css={css`
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--divider-color);
        margin-bottom: 1em;
        overflow: auto;
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
  className: PropTypes.string,
};

export default Bar;
