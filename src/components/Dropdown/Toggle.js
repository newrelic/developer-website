import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import useDropdown from './useDropdown';

const Toggle = ({ style, children, variant, size, chevron = true }) => {
  const { open, toggle } = useDropdown();

  return (
    <Button style={style} variant={variant} onClick={toggle} size={size}>
      {children}
      {chevron && (
        <Icon
          name="fe-chevron-down"
          css={css`
            margin-left: 0.25rem;
            transform: rotate(${open ? '180deg' : '0'});
          `}
        />
      )}
    </Button>
  );
};

Toggle.propTypes = {
  chevron: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  variant: Button.propTypes.variant,
  size: Button.propTypes.size,
};

export default Toggle;
