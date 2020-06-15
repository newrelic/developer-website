import React, { useState } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import Container from './Container';
import ExternalLink from './ExternalLink';
import HamburgerMenu from './HamburgerMenu';
import styles from './Header.module.scss';

const Header = () => {
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

        <HamburgerMenu
          className={styles.hamburgerMenu}
          toggle={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />

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

export default Header;
