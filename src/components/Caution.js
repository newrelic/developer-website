import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Callouts.module.scss';

const Caution = ({ title, children }) => {
  return (
    <div className={styles.caution}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

Caution.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Caution.defaultProps = {
  title: 'Warning',
};

export default Caution;
