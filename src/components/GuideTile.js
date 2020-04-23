import PropTypes from 'prop-types';
import React from 'react';

// TODO clock icon
// TODO semantic element for root element here?
// TODO use path

const GuideTile = ({ minutes, title, description, path }) => (
  <div>
    {Number.isInteger(minutes) && <div>{`${minutes} minutes`}</div>}
    <h2>{title}</h2>
    <p>{description}</p>
    <button type="button">Start the Guide</button>
  </div>
);

GuideTile.propTypes = {
  minutes: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default GuideTile;
