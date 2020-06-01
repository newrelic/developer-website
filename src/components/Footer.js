import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Container from './Container';
import { link } from '../types';
import styles from './Footer.module.scss';

const Footer = ({ pages }) => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.leftColumn}>
        <Link to="/" className={`${styles.logo} logo`} />
        <div className={styles.copyright}>
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>

      <nav role="navigation" aria-label="Footer" className={styles.nav}>
        <ul>
          {pages.map((page, i) => (
            <li key={i}>
              <Link to={page.url}>{page.displayName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </footer>
);

Footer.propTypes = {
  pages: PropTypes.arrayOf(link),
};

export default Footer;
