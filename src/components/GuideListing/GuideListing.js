import './GuideListing.scss';

import Container from '../Container';
import Heading from './Heading';
import Description from './Description';
import List from './List';
import PropTypes from 'prop-types';
import React from 'react';

const GuideListing = ({ children }) => (
  <div className="GuideListing">
    <Container>{children}</Container>
  </div>
);

GuideListing.Heading = Heading;
GuideListing.Description = Description;
GuideListing.List = List;

GuideListing.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuideListing;
