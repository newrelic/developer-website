import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ onClick, open }) => (
  <button
    aria-expanded={open}
    aria-label="Mobile Menu"
    type="button"
    className={cx('HamburgerMenu', { HamburgerMenu__open: open })}
    onClick={onclick}
  >
    <div />
    <div />
    <div />
  </button>
);

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

Header.defaultProps = {
  open: false,
};

export default HamburgerMenu;
