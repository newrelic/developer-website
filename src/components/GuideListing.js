import './GuideListing.scss';

import GuideTile from './GuideTile';
import PropTypes from 'prop-types';
import React from 'react';

const GuideListing = ({ heading, description, guides }) => (
  <div className="GuideListing">
    <h1 className="GuideListing-heading">{heading}</h1>
    <p className="GuideListing-description">{description}</p>
    <div className="GuideListing-list">
      {guides.map((guide, index) => (
        <GuideTile key={index} {...guide} />
      ))}
    </div>
  </div>
);

GuideListing.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  guides: PropTypes.arrayOf(
    PropTypes.shape({
      minutes: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GuideListing;
