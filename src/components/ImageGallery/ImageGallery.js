import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

// TODO: replace with import of image, rather than grabbing one off the web
const noImagePlaceholder =
  'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

const CreateImageBlock = (image) => {
  return (
    <a
      href={image}
      target="_blank"
      rel="noreferrer"
      css={css`
        height: 207px;

        margin-right: 16px;
        margin-bottom: 6px;
      `}
    >
      <img
        src={image}
        alt="placeholder-text"
        css={css`
          width: 285px;
          height: 207px;

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

          object-fit: cover;
        `}
      />
    </a>
  );
};

/**
 * @param {Object} props
 * @param {String[]} props.images - Array of images urls.
 * @param {String} props.className
 */
const ImageGallery = ({ images, className }) => {
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
      {images && images.length > 0
        ? images.map((image) => {
            return CreateImageBlock(image);
          })
        : CreateImageBlock(noImagePlaceholder)}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default ImageGallery;
