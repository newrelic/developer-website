import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ onClick }) => {
  const [open, updateOpen] = useState(false);

  return (
    <button
      aria-expanded={open}
      aria-label="Mobile Menu"
      type="button"
      className={cx('HamburgerMenu', { HamburgerMenu__open: open })}
      onClick={() => {
        updateOpen(!open);
        onClick();
      }}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamburgerMenu;
