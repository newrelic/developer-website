import React from 'react';
import PropTypes from 'prop-types';

import styles from './Callouts.module.scss';

const Important = ({ title, children }) => {
  return (
    <div className={styles.important}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

Important.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Important.defaultProps = {
  title: `Note`,
};

export default Important;
