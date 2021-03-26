import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import DropdownContext from './Context';
import Toggle from './Toggle';
import Menu from './Menu';
import MenuItem from './MenuItem';

const ALIGNMENTS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const Dropdown = ({ align, children, className, closeOnClick = true }) => {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({ align, open, toggle: () => setOpen((open) => !open) }),
    [align, open]
  );
  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (closeOnClick) {
      if (open) {
        document.addEventListener('click', hide);
      }

      return () => document.removeEventListener('click', hide);
    }
  }, [hide, open, closeOnClick]);

  return (
    <DropdownContext.Provider value={value}>
      <div
        className={className}
        css={css`
          display: flex;
          justify-content: ${ALIGNMENTS[align]};
          position: relative;
        `}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.propTypes = {
  align: PropTypes.oneOf(Object.keys(ALIGNMENTS)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closeOnClick: PropTypes.bool,
};

Dropdown.defaultProps = {
  align: 'left',
};

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;

export default Dropdown;
