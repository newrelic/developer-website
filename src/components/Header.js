import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ links }) => (
  <header className="Header">
    <nav className="Header-nav Header-nav--nr"></nav>

    <h1 className="Header-title">
      <Link to="/">{'</>'} New Relic Developers</Link>
    </h1>

    <nav className="Header-nav Header-nav--main">
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.url} className="Header-nav-link">
              {link.displayName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Header.defaultProps = {
  links: [
    { displayName: 'Collect Data', url: '' },
    { displayName: 'Explore Data', url: '' },
    { displayName: 'Build Apps', url: '' },
    { displayName: 'Automate New Relic', url: '' },
    { displayName: 'Reference Docs', url: '' },
  ],
};

export default Header;
