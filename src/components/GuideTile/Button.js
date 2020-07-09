import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from '../Button';
import { Link } from 'gatsby';

const GuideTileButton = ({ className, ...props }) => (
  <Button
    as={Link}
    variant={Button.VARIANT.PRIMARY}
    className={className}
    css={css`
      justify-self: center;

      &:hover {
        transform: translateY(-1px);
      }
    `}
    {...props}
  />
);

GuideTileButton.propTypes = {
  className: PropTypes.string,
};

export default GuideTileButton;
