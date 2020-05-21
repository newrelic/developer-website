import React from 'react';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';

const Video = ({ youtubeId, title }) => (
  <div className={styles.Video}>
    <iframe
      src={`//www.youtube.com/embed/${youtubeId}?modestbranding=1`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  // NOTE: we should expand this allow for other video sources in the future
  youtubeId: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Video.defaultProps = {
  title: 'Developer Video',
};

export default Video;
