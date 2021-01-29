import React from 'react';
import { css } from '@emotion/core';
import Heading from './Heading';
import Description from './Description';
import List from './List';
import PropTypes from 'prop-types';

const GuideListing = ({ className, children }) => (
  <div
    className={className}
    css={css`
      position: relative;
    `}
  >
    {children}
  </div>
);

GuideListing.Heading = Heading;
GuideListing.Description = Description;
GuideListing.List = List;

GuideListing.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GuideListing;
