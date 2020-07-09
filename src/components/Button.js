import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  as: Component = 'button',
  children,
  className,
  variant,
  size,
  ...props
}) => (
  <Component
    {...props}
    className={cx(className, styles.button, styles[variant], styles[size])}
  >
    {children}
  </Component>
);

Button.VARIANT = {
  PLAIN: 'plain',
  PRIMARY: 'primary',
  NORMAL: 'normal',
};

Button.SIZE = {
  SMALL: 'small',
};

Button.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Button.SIZE)),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(Object.values(Button.VARIANT)).isRequired,
};

export default Button;
