import React from 'react';
import useClipboard from '../hooks/useClipboard';
import styles from './IconReference.module.scss';
import PropTypes from 'prop-types';

const IconReference = ({ type }) => {
  const { Icon } = window.__NR1_SDK__.default;
  const [copied, copyIcon] = useClipboard();
  return (
    <button
      className={styles.button}
      type="button"
      key={type}
      onClick={() => copyIcon(type)}
    >
      <Icon className={styles.icon} type={Icon.TYPE[type]} />
      <span className={styles.iconName}>{copied ? 'Copied!' : type}</span>
    </button>
  );
};

IconReference.propTypes = {
  type: PropTypes.string,
};

export default IconReference;
