import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  as: Component = 'button',
  children,
  className,
  variant,
  role,
  ...props
}) => (
  <Component
    {...props}
    role={Component === 'button' ? 'button' : role}
    className={cx(className, styles.button, styles[variant])}
  >
    {children}
  </Component>
);

Button.VARIANT = {
  PRIMARY: 'primary',
  NORMAL: 'normal',
};

Button.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(Object.values(Button.VARIANT)).isRequired,
};

export default Button;
