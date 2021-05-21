import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Section.module.scss';

const Section = ({ backgroundBanner, children, className }) => {
  return (
    <div
      className={cx(styles.section, className, {
        [styles.backgroundBanner]: backgroundBanner,
      })}
    >
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
