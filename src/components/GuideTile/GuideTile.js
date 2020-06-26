import PropTypes from 'prop-types';
import React from 'react';
import FeatherIcon from '../FeatherIcon';
import NewRelicIcon from '../NewRelicIcon';
import Button from './Button';

import cx from 'classnames';
import styles from './GuideTile.module.scss';

const GuideTile = ({
  as: Component = 'div',
  icon,
  duration,
  title,
  description,
  className,
  children,
  ...props
}) => (
  <Component
    {...props}
    className={cx(styles.tile, className, { [styles.tileWithIcon]: icon })}
  >
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
    {children}
  </Component>
);

GuideTile.Button = Button;

GuideTile.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
};

export default GuideTile;
