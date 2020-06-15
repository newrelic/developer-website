import React from 'react';
import { Link } from 'gatsby';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.leftColumn}>
      <Link to="/" className={`${styles.logo} logo`} />
      <div className={styles.copyright}>
        Copyright &copy; 2020 New Relic Inc.
      </div>
    </div>
  </footer>
);

export default Footer;
