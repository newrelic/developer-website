import PropTypes from 'prop-types';
import React from 'react';
import FeatherIcon from './FeatherIcon';
import cx from 'classnames';
import { navigate } from 'gatsby';
import styles from './GuideTile.module.scss';

const GuideTile = ({ icon, minutes, title, description, path, className }) => (
  <div className={cx(styles.tile, className)}>
    {icon && (
      <div className={styles.iconContainer}>
        <FeatherIcon name={icon} size="2.5rem" />
      </div>
    )}

    <div className={styles.timeEstimate}>{minutes} minutes</div>
    <div className={styles.main}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
      <button type="button" onClick={() => navigate(path)}>
        Start the Guide
      </button>
    </div>
  </div>
);

GuideTile.propTypes = {
  minutes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};

export default GuideTile;
