import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import ExternalLink from './ExternalLink';
import styles from './Footer.module.scss';
import FeatherIcon from './FeatherIcon';
import Logo from './Logo';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={cx('site-container', styles.container)}>
      <div className={styles.left}>
        <Link to="/">
          <Logo
            className={styles.logo}
            textColor="#7DA5A8"
            bracketColor="#7DA5A8"
          />
        </Link>
        <div className={styles.copyright}>
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>

      <div className={styles.right}>
        <Link to="/">
          <FeatherIcon className={styles.linkIcon} name="edit" size="1rem" />
          Edit this page
        </Link>
        <ExternalLink href="https://github.com/newrelic/developer-website/issues/new/choose">
          <FeatherIcon className={styles.linkIcon} name="github" size="1rem" />
          Create an issue
        </ExternalLink>
      </div>
    </div>
  </footer>
);

export default Footer;
