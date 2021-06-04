import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const ImageCarousel = ({ images, className }) => {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        white-space: nowrap;
        overflow-x: auto;
        margin-bottom: 32px;
      `}
    >
      {images.map(image => {
        return (
          <img
            src={image}
            alt='placeholder-text'
            css={css`
              max-width: 285px;
              max-height: 207px;

              background: linear-gradient(0deg, #f3f4f4, #f3f4f4),
                linear-gradient(
                  293.05deg,
                  #70d3af -73.46%,
                  #007e8a -24.52%,
                  #052a3a 69.75%
                );
              border: 1px solid rgba(0, 0, 0, 0.1);
              box-sizing: border-box;
              box-shadow: inset 0px 0px 0px 4px #ffffff;
              border-radius: 4px;
              padding: 3px;

              margin-right: 16px;
              margin-bottom: 6px;

              object-fit: cover;
            `}
            onClick={() => window.open(image, '_blank')}
          />
        );
      })}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array,
};

export default ImageCarousel;
