import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { AnimateOnChange } from 'react-animation';

const ImageSliderAnimated = ({ width, height, images, className }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClickNext = () => {
    const nextImageIndex = selectedImageIndex + 1;
    setSelectedImageIndex(nextImageIndex % images.length);
  };

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 2rem;
      `}
    >
      <button onClick={handleClickNext}>Next</button>
      <AnimateOnChange
        animationIn="fadeIn"
        animationOut="fadeOut"
        durationOut={250}
      >
        {CreateImageBlock(images[selectedImageIndex])}
      </AnimateOnChange>
    </div>
  );
};

ImageSliderAnimated.propTypes = {};

const CreateImageBlock = (image, width, height) => {
  return (
    <a
      href={image}
      target="_blank"
      rel="noreferrer"
      css={css`
        height: ${height}px;
        width: 100%;
        margin-right: 1rem;
      `}
    >
      <img
        src={image}
        alt="placeholder-text"
        css={css`
          height: 100%;
          width: 100%;
          object-fit: cover;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 0px 4px var(--divider-color);
          border-radius: 4px;
          padding: 0.25rem;
        `}
      />
    </a>
  );
};

const noImagePlaceholder =
  'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

export default ImageSliderAnimated;
