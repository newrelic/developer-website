import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import ExternalLink from './ExternalLink';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={cx('container', styles.container)}>
      <div className={styles.left}>
        <Link to="/" className={`${styles.logo} logo`} />
        <div className={styles.copyright}>
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>

      <div className={styles.right}>
        <Link to="/" className={styles.edit}>
          Edit this page
        </Link>
        <ExternalLink
          href="https://github.com/newrelic/developer-website/issues/new/choose"
          className={styles.issue}
        >
          Create an issue
        </ExternalLink>
      </div>
    </div>
  </footer>
);

export default Footer;
