import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <div className={styles.leftColumn}>
        <Link to="/" className={`${styles.logo} logo`} />
        <div className={styles.copyright}>
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
