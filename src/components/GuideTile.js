import './GuideTile.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { navigate } from 'gatsby';

const clock = require('../images/clock.svg');

const GuideTile = ({ minutes, title, description, path }) => (
  <div className="GuideTile">
    <div className="GuideTile-timeEstimate">
      <img
        className="GuideTile-timeEstimate-icon"
        alt="timer icon"
        src={clock}
      />
      {`${minutes} minutes`}
    </div>
    <div className="GuideTile-main">
      <h2>{title}</h2>
      <p className="GuideTile-description">{description}</p>
      <button type="button" onClick={() => navigate(path)}>
        Start the Guide
      </button>
    </div>
  </div>
);

GuideTile.propTypes = {
  minutes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default GuideTile;
