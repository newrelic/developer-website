import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import styles from './Footer.module.scss';

const Footer = ({ showEdit }) => (
  <footer className={styles.footer}>
    <div className={cx('container', styles.container)}>
      <div className={styles.left}>
        <Link to="/" className={`${styles.logo} logo`} />
        <div className={styles.copyright}>
          Copyright &copy; 2020 New Relic Inc.
        </div>
      </div>

      <div className={styles.right}>
        {showEdit && (
          <Link to="/" className={styles.edit}>
            Edit this page
          </Link>
        )}
        <Link to="/" className={styles.issue}>
          Create an issue
        </Link>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  showEdit: PropTypes.bool,
};

Footer.defaultProps = {
  showEdit: true,
};

export default Footer;
