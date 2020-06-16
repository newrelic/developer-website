import React from 'react';
import { Link } from 'gatsby';
import styles from './BreadcrumbBar.module.scss';
import PropTypes from 'prop-types';
import { link } from '../types';

const BreadcrumbBar = ({ crumbs, duration }) => (
  <div className={styles.breadcrumbBar}>
    <ul className={styles.crumbs}>
      {crumbs.map((crumb, index) => (
        <li key={index}>
          {crumb.url ? (
            <Link to={crumb.url}>{crumb.displayName}</Link>
          ) : (
            <span>{crumb.displayName}</span>
          )}
        </li>
      ))}
    </ul>
    {duration && <div className={styles.duration}>{duration}</div>}
  </div>
);

BreadcrumbBar.propTypes = {
  crumbs: PropTypes.arrayOf(link),
  duration: PropTypes.string,
};

export default BreadcrumbBar;
