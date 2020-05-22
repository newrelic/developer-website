import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';
import PropTypes from 'prop-types';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.object,
};
