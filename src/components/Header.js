import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import { link } from '../types';
import Container from './Container';
import ExternalLink from './ExternalLink';
import HamburgerMenu from './HamburgerMenu';
import styles from './Header.module.scss';

const Header = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cx(styles.main, { [styles.isOpen]: isOpen })}>
      <Container className={styles.container}>
        <nav role="navigation" aria-label="New Relic" className={styles.navNr}>
          <h3 className={styles.hideOnDesktop}>Sites</h3>
          <ul>
            <li className={styles.hideOnMobile}>
              <ExternalLink
                className={cx(styles.logo, styles.logoNr)}
                href="//newrelic.com"
              />
            </li>
            <li>
              <Link to="/" className={styles.isActive}>
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

        <h1 className={styles.title}>
          <Link to="/" className={cx(styles.logo, styles.titleLogo)} />
        </h1>

        <HamburgerMenu
          className={styles.hamburgerMenu}
          toggle={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />

        <nav role="navigation" aria-label="Main" className={styles.navMain}>
          <h3 className={styles.hideOnDesktop}>Developers</h3>
          <ul>
            {pages.map((page, i) => (
              <li key={i}>
                <Link to={page.url}>{page.displayName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.navTools}>
          <h3 className={styles.hideOnDesktop}>Tools</h3>
          <ul>
            <li>
              <ExternalLink
                className={cx(styles.logo, styles.logoGithub)}
                href="//github.com/newrelic"
              >
                <span className={styles.hideOnDesktop}>
                  Contribute on GitHub
                </span>
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
