import React from 'react';
import PropTypes from 'prop-types';
import ComponentList from './ComponentList';

const PlaygroundSidebar = ({ onAdd }) => {
  return <ComponentList onAdd={onAdd} />;
};

PlaygroundSidebar.propTypes = {
  onAdd: PropTypes.func,
};

export default PlaygroundSidebar;
