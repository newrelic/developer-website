import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import { Transition, animated } from 'react-spring';

const ImageSlider = ({ images, height }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [forward, setForward] = useState(true);

  const handleClickNext = () => {
    const nextImageIndex = selectedImageIndex + 1;
    setSelectedImageIndex(nextImageIndex % images.length);
    setForward(true);
  };

  const handleClickPrev = () => {
    const prevImageIndex = selectedImageIndex - 1;
    if (prevImageIndex < 0) {
      setSelectedImageIndex(images.length - 1);
    } else {
      setSelectedImageIndex(prevImageIndex % images.length);
    }
    setForward(false);
  };

  const handleClickSpecificSlide = (indexValue) => {
    setSelectedImageIndex(indexValue);
  };

  return (
    <div
      css={css`
        position: relative;
        height: ${height}px;
        margin-bottom: 2rem;
        overflow: hidden;
      `}
    >
      {images.length > 1 && (
        <>
          <Button
            onClick={handleClickPrev}
            variant={Button.VARIANT.PLAIN}
            css={css`
              position: absolute;
              z-index: 200;
              top: 38%;
              left: 0;
              background: none;
              border: none;
              cursor: pointer;
            `}
          >
            <Icon
              css={css`
                color: var(--color-teal-500);
              `}
              name="chevron-left"
              size="4rem"
            />
          </Button>
          <Button
            onClick={handleClickNext}
            variant={Button.VARIANT.PLAIN}
            css={css`
              position: absolute;
              z-index: 200;
              top: 38%;
              right: 0;
              background: none;
              border: none;
              cursor: pointer;
            `}
          >
            <Icon
              name="chevron-right"
              size="4rem"
              css={css`
                color: var(--color-teal-500);
              `}
            />
          </Button>
        </>
      )}
      {
        <Transition
          items={images[selectedImageIndex]}
          from={{
            opacity: 0.5,
            transform: `translate3d(${forward ? '100%' : '-100%'}, 0px, 0px)`,
          }}
          enter={{ opacity: 1, transform: 'translate3d(-0%, 0px, 0px)' }}
          leave={{
            transform: `translate3d(${forward ? '-100%' : '100%'}, 0px, 0px)`,
          }}
          delay={200}
          config={{ mass: 1, tension: 100, friction: 20 }}
        >
          {(styles, item) => (
            <animated.div style={{ ...styles, position: 'absolute' }}>
              <a
                href={item}
                target="_blank"
                rel="noreferrer"
                css={css`
                  height: ${height}px;
                  width: 100%;
                  margin-right: 1rem;
                `}
              >
                <img
                  src={item}
                  alt="placeholder-text"
                  css={css`
                    height: ${height}px;
                    width: 100%;
                    box-sizing: border-box;
                    box-shadow: inset 0px 0px 0px 4px var(--divider-color);
                    border-radius: 4px;
                    padding: 0.25rem;
                    @media screen and (max-width: 760px) {
                      object-fit: contain;
                    }
                  `}
                />
              </a>
            </animated.div>
          )}
        </Transition>
      }
      <div
        css={css`
          z-index: 200;
          position: absolute;
          bottom: 2%;
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          `}
        >
          {images.map((_, index) => (
            <Button
              onClick={() => handleClickSpecificSlide(index)}
              key={`goToSlide${index}`}
              variant={Button.VARIANT.PLAIN}
              css={css`
                border: none;
                cursor: pointer;
                color: var(--color-teal-500);
              `}
            >
              <Icon
                name="circle"
                css={css`
                  fill: ${selectedImageIndex === index ? 'teal' : 'none'};
                `}
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
  height: PropTypes.number,
};

export default ImageSlider;
