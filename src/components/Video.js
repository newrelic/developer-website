import React from 'react';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';

const Video = ({ wistiaId, youtubeId, title }) => {
  const embedYoutube = youtubeId
    ? `//www.youtube.com/embed/${youtubeId}?modestbranding=1`
    : null;
  const embedWistia = wistiaId
    ? `//fast.wistia.net/embed/iframe/${wistiaId}`
    : null;
  return (
    <div className={styles.Video}>
      <iframe
        src={embedYoutube || embedWistia}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

Video.propTypes = {
  // NOTE: we should expand this allow for other video sources in the future
  youtubeId: PropTypes.string,
  wistiaId: PropTypes.string,
  title: PropTypes.string,
};

Video.defaultProps = {
  title: 'Developer Video',
};

export default Video;
