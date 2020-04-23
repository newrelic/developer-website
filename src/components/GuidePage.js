import GuideTile from './GuideTile';
import PropTypes from 'prop-types';
import React from 'react';

const GuidePage = ({ heading, description, guides }) => (
  <>
    <h1>{heading}</h1>
    <p>{description}</p>
    <div>
      {guides.map((guide, index) => (
        <GuideTile key={index} {...guide} />
      ))}
    </div>
  </>
);

GuidePage.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  guides: PropTypes.object.isRequired,
};

export default GuidePage;
