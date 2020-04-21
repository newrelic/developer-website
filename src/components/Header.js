import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import './Header.scss';

const Header = ({ links }) => {
  // NOTE: we may want to abstract this
  const data = useStaticQuery(graphql`
    query {
      nrLogo: file(relativePath: { eq: "NewRelic-logo.png" }) {
        childImageSharp {
          fixed(width: 739, height: 133, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ghLogo: file(relativePath: { eq: "GitHub-logo.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className="Header">
      <Container>
        <>
          <nav className="Header-nav Header-nav--sitesAndTools">
            <ul>
              <li>
                <a
                  href="//newrelic.com"
                  target="_blank"
                  className="Header-nav-link"
                  rel="noopener noreferrer"
                >
                  <img src={data.nrLogo.childImageSharp.fixed.src} />
                </a>
              </li>
              <li>
                <Link to="/" className="Header-nav-link">
                  Developers
                </Link>
              </li>
              <li>
                <a
                  href="//opensource.newrelic.com"
                  target="_blank"
                  className="Header-nav-link"
                  rel="noopener noreferrer"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="//docs.newrelic.com"
                  target="_blank"
                  className="Header-nav-link"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="//githib.com/newrelic"
                  target="_blank"
                  className="Header-nav-link"
                  rel="noopener noreferrer"
                >
                  <img src={data.ghLogo.childImageSharp.fixed.src} />
                </a>
              </li>
            </ul>
          </nav>

          <h1 className="Header-title">
            <Link to="/">{'</>'} New Relic Developers</Link>
          </h1>

          <nav className="Header-nav Header-nav--main">
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <Link to={link.url} className="Header-nav-link">
                    {link.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      </Container>
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
};

Header.defaultProps = {
  links: [
    { displayName: 'Collect Data', url: '' },
    { displayName: 'Explore Data', url: '' },
    { displayName: 'Build Apps', url: '' },
    { displayName: 'Automate New Relic', url: '' },
    { displayName: 'Reference Docs', url: '' },
  ],
};

export default Header;
