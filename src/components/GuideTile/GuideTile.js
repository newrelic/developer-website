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
  alignment,
  ...props
}) => (
  <Component
    {...props}
    className={cx(styles.tile, className, {
      [styles.tileWithIcon]: icon,
      [styles.tileLeftAligned]: alignment === GuideTile.ALIGNMENT.LEFT,
      [styles.tileCenterAligned]: alignment === GuideTile.ALIGNMENT.CENTER,
    })}
  >
    {icon && (
      <div className={styles.iconContainer}>
        <NewRelicIcon name={icon} size="2.5rem" />
      </div>
    )}
    <div className={styles.timeEstimate}>
      {duration ? (
        <FeatherIcon className={styles.timeIcon} name="clock" />
      ) : (
        <span>&nbsp;</span>
      )}
      {duration}
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    {children}
  </Component>
);

GuideTile.Button = Button;

GuideTile.ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
};

GuideTile.propTypes = {
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
  alignment: PropTypes.oneOf(Object.values(GuideTile.ALIGNMENT)),
};

GuideTile.defaultProps = {
  alignment: GuideTile.ALIGNMENT.CENTER,
};

export default GuideTile;
