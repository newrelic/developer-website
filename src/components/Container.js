import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ children }) => (
  <div className="u-container">{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
