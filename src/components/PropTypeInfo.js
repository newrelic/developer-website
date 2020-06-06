import React from 'react';
import PropTypes from 'prop-types';

const PropTypeInfo = ({ type }) => {
  switch (type.name) {
    case 'function':
      return <div>func</div>;
    default:
      return null;
  }
};

PropTypeInfo.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default PropTypeInfo;
