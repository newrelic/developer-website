import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import noImagePlaceholder from '../../images/no-image-placeholder.png';

const CreateImageBlock = image => {
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
};

/**
 * Brief description of the function here.
 * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
 * @param {String[]} images - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */
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
      {images && images.length > 0
        ? images.map(image => {
            return CreateImageBlock(image);
          })
        : CreateImageBlock(noImagePlaceholder)}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageCarousel;
