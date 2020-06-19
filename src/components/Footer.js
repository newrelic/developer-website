import React, { useContext } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import ExternalLink from './ExternalLink';
import { PageContext } from './PageContext';
import styles from './Footer.module.scss';
import FeatherIcon from './FeatherIcon';
import Logo from './Logo';
import PropTypes from 'prop-types';

const githubBaseUrl = 'https://github.com/newrelic/developer-website';

const Footer = ({ className }) => {
  const { fileRelativePath } = useContext(PageContext);

  return (
    <footer className={cx(styles.footer, className)}>
      <div className={cx('site-container', styles.container)}>
        <div className={styles.left}>
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

        <div className={styles.right}>
          {fileRelativePath && (
            <ExternalLink
              href={`${githubBaseUrl}/blob/master/${fileRelativePath}`}
            >
              <FeatherIcon
                className={styles.linkIcon}
                name="edit"
                size="1rem"
              />
              Edit this page
            </ExternalLink>
          )}
          <ExternalLink href={`${githubBaseUrl}/issues/new/choose`}>
            <FeatherIcon
              className={styles.linkIcon}
              name="github"
              size="1rem"
            />
            Create an issue
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
