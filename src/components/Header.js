import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import { link } from '../types';
import Container from './Container';
import ExternalLink from './ExternalLink';
import HamburgerMenu from './HamburgerMenu';
import './Header.scss';

const Header = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cx('Header--main', { 'is-open': isOpen })}>
      <Container>
        <nav
          role="navigation"
          aria-label="New Relic"
          className="Header-nav--nr"
        >
          <h3 className="u-hideOnDesktop">Sites</h3>
          <ul>
            <li className="u-hideOnMobile">
              <ExternalLink className="Header-nav-logo" href="//newrelic.com" />
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
          <Link to="/">{'</>'} New Relic Developers</Link>
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
                className="Header-nav-github"
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

Header.defaultProps = {
  pages: [
    { displayName: 'Collect Data', url: '' },
    { displayName: 'Explore Data', url: 'explore-data' },
    { displayName: 'Build Apps', url: '' },
    { displayName: 'Automate New Relic', url: '' },
    { displayName: 'Reference Docs', url: '' },
  ],
};

export default Header;
