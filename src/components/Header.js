import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import './Header.scss';

const Header = ({ links }) => (
  <header className="Header">
    <Container>
      <>
        <nav className="Header-nav Header-nav--nr">
          <ul>
            <li>
              <a
                href="//newrelic.com"
                target="_blank"
                className="Header-nav-link"
              >
                New Relic
              </a>
            </li>
            <li>
              <Link to="/" className="Header-nav-link">
                Developers
              </Link>
            </li>
            <li>
              <a
                href="//opensource.newrelic.com"
                target="_blank"
                className="Header-nav-link"
              >
                Open Source
              </a>
            </li>
            <li>
              <a
                href="//docs.newrelic.com"
                target="_blank"
                className="Header-nav-link"
              >
                Docs
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="//githib.com/newrelic"
                target="_blank"
                className="Header-nav-link"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

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
      </>
    </Container>
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
