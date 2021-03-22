import React from 'react';
import PropTypes from 'prop-types';
import ComponentList from './ComponentList';

const PlaygroundSidebar = ({ onAdd, isOpen }) => {
  return <ComponentList onAdd={onAdd} isOpen={isOpen} />;
};

PlaygroundSidebar.propTypes = {
  onAdd: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default PlaygroundSidebar;
