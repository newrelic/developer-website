import React, { useRef, useState } from 'react';
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
        margin-right: 1rem;
      `}
    >
      <img
        src={image}
        alt="placeholder-text"
        css={css`
          height: 207px;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 0px 4px var(--divider-color);
          border-radius: 4px;
          padding: 0.25rem;
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
  const gallery = useRef();
  const [isGalleryScrolledToEnd, setIsGalleryScrolledToEnd] = useState(false);

  const onScroll = () => {
    const scrollLeft = Math.round(gallery.current.scrollLeft);
    const scrollWidth = gallery.current.scrollWidth;
    const offsetWidth = gallery.current.offsetWidth;
    const isScrolledToEnd = scrollWidth - offsetWidth === scrollLeft;
    setIsGalleryScrolledToEnd(isScrolledToEnd);
  };

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 2rem;
      `}
    >
      <div
        className={className}
        ref={gallery}
        onScroll={onScroll}
        css={css`
          display: flex;
          white-space: nowrap;
          overflow-x: auto;
          &:after {
            pointer-events: none;
            content: '';
            position: absolute;
            background: ${!isGalleryScrolledToEnd
              ? `linear-gradient(
              to right,
              transparent 87%,
              var(--primary-background-color)
            )`
              : `none`};
            width: 100%;
            height: 100%;
          }
        `}
      >
        {images && images.length > 0
          ? images.map((image) => {
              return CreateImageBlock(image);
            })
          : CreateImageBlock(noImagePlaceholder)}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default ImageGallery;
