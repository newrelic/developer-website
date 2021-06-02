import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ children }) => (
  <div style={{ border: '1px solid red' }}>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { ...child.props, index })
    )}
  </div>
);

Bar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bar;
