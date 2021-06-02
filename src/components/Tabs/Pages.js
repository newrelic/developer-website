import React from 'react';
import PropTypes from 'prop-types';

const Pages = ({ children }) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, { index })
  );

Pages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pages;
