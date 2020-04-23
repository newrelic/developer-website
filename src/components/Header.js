import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Container from './Container';
import ExternalLink from './ExternalLink';
import HamburgerMenu from './HamburgerMenu';

import './Header.scss';

const Header = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header
      className={cx('Header--main', { 'Header--main__menuOpen': menuOpen })}
    >
      <Container>
        <div className="Header--main__mobile">
          <h1 className="Header-title__mobile">
            <Link to="/">{'</>'} New Relic Developers</Link>
          </h1>
          <HamburgerMenu
            toggle={() => setMenuOpen(!menuOpen)}
            open={menuOpen}
          />
        </div>

        <nav role="navigation" aria-label="New Relic" className="nav--nr">
          <h3 className="u-hideOnDesktop">Sites</h3>
          <ul>
            <li className="u-hideOnMobile">
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

        <h1 className="Header-title">
          <Link to="/">{'</>'} New Relic Developers</Link>
        </h1>

        <nav role="navigation" aria-label="Main" className="nav--main">
          <h3 className="u-hideOnDesktop">Developers</h3>
          <ul>
            {pages.map((page, i) => (
              <li key={i}>
                <Link to={page.path}>{page.displayName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="nav--tools">
          <h3 className="u-hideOnDesktop">Tools</h3>
          <ul>
            <li>
              <ExternalLink href="//github.com/newrelic">
                <img src={data.ghLogo.childImageSharp.fixed.src} />
                <span className="u-hideOnDesktop">Contribute on GitHub</span>
              </ExternalLink>
            </li>
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
    { displayName: 'Explore Data', path: '' },
    { displayName: 'Build Apps', path: '' },
    { displayName: 'Automate New Relic', path: '' },
    { displayName: 'Reference Docs', path: '' },
  ],
};

export default Header;
