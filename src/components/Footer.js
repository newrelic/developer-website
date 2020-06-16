import React from 'react';
import { Link } from 'gatsby';
import styles from './Footer.module.scss';
import Logo from './Logo';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.leftColumn}>
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
  </footer>
);

export default Footer;
