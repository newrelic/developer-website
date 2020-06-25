import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FeatherIcon from './FeatherIcon';
import styles from './SearchInput.module.scss';

const SearchInput = ({ className, onClear, value, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClear();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClear();
  };
  return (
    <div className={cx(styles.container, className)}>
      <input
        value={value}
        {...props}
        className={styles.input}
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div className={styles.buttonContainer}>
        <button
          onClick={handleClick}
          className={styles.button}
          onKeyDown={(e) => e.preventDefault()}
          type="button"
        >
          <FeatherIcon name={value ? 'x' : 'search'} className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onClear: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
