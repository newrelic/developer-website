import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FeatherIcon from './FeatherIcon';
import styles from './SearchInput.module.scss';

const SearchInput = ({ className, ...props }) => (
  <div className={cx(styles.container, className)}>
    <input {...props} className={styles.input} type="text" />
    <FeatherIcon name="search" className={styles.icon} />
  </div>
);

SearchInput.propTypes = {
  className: PropTypes.string,
};

export default SearchInput;
