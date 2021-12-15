import React from 'react';
import PropTypes from 'prop-types';
import useMobileDetect from 'use-mobile-detect-hook';
import { css } from '@emotion/react';
import useTabs from './useTabs';
import Select from '../Select';

const MobileTabControl = ({ children }) => {
  const [currentTab, setCurrentTab] = useTabs();
  // eslint gets angry about using props from React.Children.map
  /* eslint-disable react/prop-types */
  return (
    <Select
      onChange={(e) => {
        setCurrentTab(e.target.value);
      }}
      css={css`
        padding-top: 1rem;
        padding-bottom: 1rem;
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
    </Select>
  );
  /* eslint-enable react/prop-types */
};

MobileTabControl.propTypes = {
  children: PropTypes.node.isRequired,
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
