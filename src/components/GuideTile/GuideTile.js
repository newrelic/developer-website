import PropTypes from 'prop-types';
import React from 'react';
import FeatherIcon from '../FeatherIcon';
import NewRelicIcon from '../NewRelicIcon';
import cx from 'classnames';
import { navigate } from 'gatsby';
import styles from './GuideTile.module.scss';

const GuideTile = ({
  icon,
  duration,
  title,
  description,
  path,
  className,
  button = true,
}) => (
  <div className={cx(styles.tile, className, { [styles.tileWithIcon]: icon })}>
    {icon && (
      <div className={styles.iconContainer}>
        <NewRelicIcon name={icon} size="2.5rem" />
      </div>
    )}

    <div className={styles.timeEstimate}>
      <FeatherIcon className={styles.timeIcon} name="clock" />
      {duration}
    </div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    {button && (
      <button
        type="button"
        className={styles.button}
        onClick={() => navigate(path)}
      >
        Start the guide
      </button>
    )}
  </div>
);

GuideTile.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  button: PropTypes.bool,
};

export default GuideTile;
