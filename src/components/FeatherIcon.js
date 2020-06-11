import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './FeatherIcon.module.scss';

const FeatherIcon = ({ className, name }) => {
  const paths = ICONS[name];

  return paths ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cx(styles.icon, className)}
    >
      {paths}
    </svg>
  ) : null;
};

const ICONS = {
  copy: (
    <>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
};

FeatherIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(ICONS)),
};

export default FeatherIcon;
