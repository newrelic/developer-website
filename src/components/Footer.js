import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Container from './Container';
import { link } from '../types';

import './Footer.scss';

const Footer = ({ pages }) => (
  <footer className="Footer">
    <Container>
      <div className="Footer-left">
        <Link to="/" className="logo Footer-logo" />
        <div className="Footer-copyright">
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>

      <nav role="navigation" aria-label="Footer" className="Footer-nav">
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
