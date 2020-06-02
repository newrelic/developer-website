import React from 'react';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';

const Video = ({ id, type, title }) => {
  const src = {
    youtube: `//www.youtube.com/embed/${id}?modestbranding=1`,
    wistia: `//fast.wistia.net/embed/iframe/${id}`,
  };
  return (
    <div className={styles.Video}>
      <iframe
        src={src[type]}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Video.defaultProps = {
  title: 'Developer Video',
};

export default Video;
