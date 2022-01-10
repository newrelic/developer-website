import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import DEFAULT_IMAGE from '../images/default-logo-background.svg';

const PackImg = ({ className, logoUrl, packName }) => {
  const [packAcronym, setPackAcronym] = useState('');

  const getPackNameAcronym = () => {
    let packNameAcronym = '';
    packName.split(' ').forEach((word) => {
      packNameAcronym = packNameAcronym.concat('', word.charAt(0));
    });
    setPackAcronym(packNameAcronym.toUpperCase());
  };
  useEffect(() => {
    if (!logoUrl) {
      getPackNameAcronym();
    }
  });

  if (logoUrl) {
    return (
      <img
        css={css`
          display: block;
          max-width: 100%;
          max-height: 100%;
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
        font-size: ${packAcronym.length < 4 ? '4rem' : '2rem'};
        background-image: url(${DEFAULT_IMAGE});
        background-repeat: no-repeat;
        background-position: center;
        background-origin: content-box;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <p>{packAcronym}</p>
    </div>
  );
};

PackImg.propTypes = {
  packName: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
  className: PropTypes.string,
};

export default PackImg;
