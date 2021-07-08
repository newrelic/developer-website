import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import DEFAULT_IMAGE from '../images/new-relic-logo.png';

const PackImg = ({ className, logoUrl, packName }) => {
  const getPackNameAcronym = () => {
    let packNameAcronym = '';
    packName.split(' ').forEach((word) => {
      packNameAcronym = packNameAcronym.concat('', word.charAt(0));
    });
    return packNameAcronym.toUpperCase();
  };

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
        font-size: 7rem;
      `}
    >
      <div
        css={css`
          border: solid var(--color-brand-400) 2px;
          height: 1px;
          width: 60px;
          position: relative;
          top: 20%;
          left: 0;
        `}
      />
      <div
        css={css`
          border: solid var(--color-green-200) 2px;
          height: 1px;
          width: 30px;
          position: relative;
          top: 75%;
          left: 90%;
        `}
      />
      <div
        css={css`
          border: solid var(--color-red-300) 2px;
          height: 1px;
          width: 20px;
          position: relative;
          top: 50px;
          left: 0px;
        `}
      />
      <div
        css={css`
          border: solid var(--color-brand-300) 2px;
          height: 1px;
          width: 50px;
          position: relative;
          top: 80%;
          left: 83%;
        `}
      />
      <p
        css={css`
          text-align: center;
          line-height: 150%;
        `}
      >
        {getPackNameAcronym()}
      </p>
    </div>
  );
};

PackImg.propTypes = {
  packName: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
  className: PropTypes.string,
};

export default PackImg;
