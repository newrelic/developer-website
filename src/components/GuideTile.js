import './GuideTile.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { navigate } from 'gatsby';
import cx from 'classnames';

const GuideTile = ({ minutes, title, description, path, className }) => (
  <div className={cx('GuideTile', className)}>
    <div className="GuideTile-timeEstimate">{minutes} minutes</div>
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
  className: PropTypes.string,
};

export default GuideTile;
