import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Video.module.scss';

const videoPlatforms = {
  youtube: (id) => `//www.youtube.com/embed/${id}?modestbranding=1`,
  wistia: (id) => `//fast.wistia.net/embed/iframe/${id}`,
};

const Video = ({ id, type, title, className }) => (
  <div className={cx(className, styles.video)}>
    <iframe
      src={videoPlatforms[type](id)}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(videoPlatforms)).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

Video.defaultProps = {
  title: 'Developer Video',
};

export default Video;
