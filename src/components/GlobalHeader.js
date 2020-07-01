import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';
import { PageContext } from './PageContext';
import { githubBaseUrl } from '../data/constants';
import NewRelicLogo from './NewRelicLogo';
import ExternalLink from './ExternalLink';
import FeatherIcon from './FeatherIcon';
import useDarkMode from 'use-dark-mode';

import styles from './GlobalHeader.module.scss';

const GlobalHeader = ({ className }) => {
  const { fileRelativePath } = useContext(PageContext);
  const darkMode = useDarkMode(false);

  return (
    <div className={cx(styles.globalHeaderContainer, className)}>
      <div className={cx(styles.globalHeaderContent, 'site-container')}>
        <div className={styles.leftSideLinksContainer}>
          <ExternalLink
            href="https://newrelic.com/"
            className={styles.logoContainer}
          >
            <NewRelicLogo />
          </ExternalLink>

          <ul className={styles.leftSideLinks}>
            <li>
              <Link to="/" className={cx(styles.leftSideLink, styles.active)}>
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
            <li>
              <ExternalLink
                href="https://docs.newrelic.com/"
                className={styles.leftSideLink}
              >
                Documentation
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://discuss.newrelic.com/"
                className={styles.leftSideLink}
              >
                Community
              </ExternalLink>
            </li>
          </ul>
        </div>

        <ul className={styles.rightSideButtons}>
          {fileRelativePath && (
            <li className={styles.rightSideButton}>
              <ExternalLink
                href={`${githubBaseUrl}/blob/master/${fileRelativePath}`}
              >
                <FeatherIcon name="edit" size="1rem" />
              </ExternalLink>
            </li>
          )}
          <li className={styles.rightSideButton}>
            <ExternalLink href={`${githubBaseUrl}/issues/new/choose`}>
              <FeatherIcon name="github" size="1rem" />
            </ExternalLink>
          </li>
          <li className={styles.rightSideButton}>
            <FeatherIcon
              name={darkMode.value ? 'sun' : 'moon'}
              size="1rem"
              onClick={darkMode.toggle}
            />
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
