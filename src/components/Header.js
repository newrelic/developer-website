import './Header.scss';

import { Link, graphql, useStaticQuery } from 'gatsby';

import Container from './Container';
import ExternalLink from './ExternalLink';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ pages }) => {
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
    <header className="Header--main">
      <Container>
        <div className="Header-topBar">
          <nav role="navigation" aria-label="New Relic" className="nav--nr">
            <ul>
              <li>
                <ExternalLink href="//newrelic.com">
                  <img src={data.nrLogo.childImageSharp.fixed.src} />
                </ExternalLink>
              </li>
              <li>
                <Link to="/">Developers</Link>
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

          <nav className="nav--user">
            <ul>
              <li>
                <ExternalLink href="//github.com/newrelic">
                  <img src={data.ghLogo.childImageSharp.fixed.src} />
                </ExternalLink>
              </li>
            </ul>
          </nav>
        </div>

        <h1>
          <Link to="/">{'</>'} New Relic Developers</Link>
        </h1>

        <nav role="navigation" aria-label="Main" className="nav--main">
          <ul>
            {pages.map((page, i) => (
              <li key={i}>
                <Link to={page.path}>{page.displayName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

Header.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
};

Header.defaultProps = {
  pages: [
    { displayName: 'Collect Data', path: '' },
    { displayName: 'Explore Data', path: 'explore-data' },
    { displayName: 'Build Apps', path: '' },
    { displayName: 'Automate New Relic', path: '' },
    { displayName: 'Reference Docs', path: '' },
  ],
};

export default Header;
