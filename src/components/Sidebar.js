import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ pages }) => (
  <aside className="Sidebar">
    <div>This is the sidebar</div>
  </aside>
);

Sidebar.propTypes = {
  pages: PropTypes.array, // TODO
};

export default Sidebar;
