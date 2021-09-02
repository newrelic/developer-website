import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import DEFAULT_IMAGE from '../images/default-logo-background.svg';

const createPackAcronym = (name) =>
  name.split(' ').reduce((acc, word) => `${acc}${word.charAt(0)}`, '');

const PackImg = ({ className, logoUrl, packName }) => {
  const packAcronym = createPackAcronym(packName);

  if (logoUrl) {
    return (
      <img
        css={css`
          display: block;
        `}
        src={logoUrl}
        alt={packName}
        onError={(e) => {
          e.preventDefault();
          e.target.src = DEFAULT_IMAGE;
        }}
        className={className}
      />
    );
  }
  return (
    <div
      className={className}
      css={css`
        color: var(--color-brand-400);
        font-family: var(--code-font);
        font-size: ${packAcronym.length < 4 ? '6rem' : '4rem'};
        background-image: url(${DEFAULT_IMAGE});
        background-repeat: no-repeat;
        background-position: center;
        background-origin: content-box;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <p>{packAcronym.toUpperCase()}</p>
    </div>
  );
};

PackImg.propTypes = {
  packName: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
  className: PropTypes.string,
};

export default PackImg;
