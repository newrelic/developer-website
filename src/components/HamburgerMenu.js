import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './HamburgerMenu.scss';

const HamburgerMenu = ({ className, toggle, isOpen }) => (
  <button
    aria-expanded={isOpen}
    aria-label="Mobile Menu"
    type="button"
    className={cx('HamburgerMenu', className, { 'is-open': isOpen })}
    onClick={() => toggle()}
  >
    <div />
    <div />
    <div />
  </button>
);

HamburgerMenu.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  isOpen: false,
};

export default HamburgerMenu;
