import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => <h4>{children}</h4>;

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
