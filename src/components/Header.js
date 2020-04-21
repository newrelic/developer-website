import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
  <header>
    <h1>
      <Link to="/">Developer Site</Link>
    </h1>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
