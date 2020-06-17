import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ExternalLink from './ExternalLink';

import styles from './GlobalHeader.module.scss';

const GlobalHeader = ({ className }) => {
  return (
    <div className={`${styles.globalHeaderContainer} ${className}`}>
      <div className={styles.globalHeaderContent}>
        <div className={styles.leftSideLinksContainer}>
          <ExternalLink
            href="https://newrelic.com/"
            className={styles.logo}
            rel="noopener noreferrer"
          >
            New Relic
          </ExternalLink>

          <ul className={styles.leftSideLinks}>
            <li className={`${styles.leftSideLinkItem} ${styles.active}`}>
              <Link to="/" className={styles.leftSideLink}>
                Developers
              </Link>
            </li>
            <li className={styles.leftSideLinkItem}>
              <ExternalLink
                href="https://opensource.newrelic.com/"
                className={styles.leftSideLink}
              >
                Open Source
              </ExternalLink>
            </li>
            <li className={styles.leftSideLinkItem}>
              <ExternalLink
                href="https://docs.newrelic.com/"
                className={styles.leftSideLink}
              >
                Documentation
              </ExternalLink>
            </li>
          </ul>
        </div>

        <ul className={styles.rightSideButtons}>
          <li className={`${styles.rightSideButton} ${styles.githubButton}`}>
            <ExternalLink
              href="https://github.com/newrelic/developer-website"
              className={styles.githubButtonLink}
            >
              GitHub
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {
  className: PropTypes.string,
};

export default GlobalHeader;
