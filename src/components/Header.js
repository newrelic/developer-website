import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import { link } from '../types';
import AuthContext from './AuthContext';
import Container from './Container';
import ExternalLink from './ExternalLink';
import HamburgerMenu from './HamburgerMenu';
import './Header.scss';

const Header = ({ pages }) => {
  const authContext = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cx('Header--main', { 'is-open': isOpen })}>
      <Container>
        <div>
          {authContext.isAuthenticated ? "you're cool" : 'who are you?!'}{' '}
        </div>
        <nav
          role="navigation"
          aria-label="New Relic"
          className="Header-nav--nr"
        >
          <h3 className="u-hideOnDesktop">Sites</h3>
          <ul>
            <li className="u-hideOnMobile">
              <ExternalLink
                className="logo Header-nav-logo--nr"
                href="//newrelic.com"
              />
            </li>
            <li>
              <Link to="/" className="is-active">
                Developers
              </Link>
            </li>
            <li>
              <ExternalLink href="//opensource.newrelic.com">
                Open Source
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="//docs.newrelic.com">
                Documentation
              </ExternalLink>
            </li>
          </ul>
        </nav>

        <h1 className="Header-title">
          <Link to="/" className="logo Header-title-logo" />
        </h1>

        <HamburgerMenu toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />

        <nav role="navigation" aria-label="Main" className="Header-nav--main">
          <h3 className="u-hideOnDesktop">Developers</h3>
          <ul>
            {pages.map((page, i) => (
              <li key={i}>
                <Link to={page.url}>{page.displayName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="Header-nav--tools">
          <h3 className="u-hideOnDesktop">Tools</h3>
          <ul>
            <li>
              <ExternalLink
                className="logo Header-nav-logo--github"
                href="//github.com/newrelic"
              >
                <span className="u-hideOnDesktop">Contribute on GitHub</span>
              </ExternalLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

Header.propTypes = {
  pages: PropTypes.arrayOf(link),
};

export default Header;
