import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ backgroundBanner, children, className }) => {
  return (
    <div className={styles.section}>
      <div
        className={cx(
          { [styles.backgroundBanner]: backgroundBanner },
          className
        )}
      />
      {children}
    </div>
  );
};

Section.propTypes = {
  backgroundBanner: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
