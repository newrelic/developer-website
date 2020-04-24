import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ toggle, open }) => (
  <button
    aria-expanded={open}
    aria-label="Mobile Menu"
    type="button"
    className={cx('HamburgerMenu', { 'is-open': open })}
    onClick={() => toggle()}
  >
    <div />
    <div />
    <div />
  </button>
);

HamburgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  open: false,
};

export default HamburgerMenu;
