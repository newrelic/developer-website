import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': 'developer.newrelic.com',
  // We need this header or the 'accept: application/json' to be set for
  // SG to treat this as a programatic request and provide a 401 instead
  // of a redirect response
  'X-Requested-With': 'XMLHttpRequest',
};

export const client = new ApolloClient({
  uri: 'https://nerd-graph.service.newrelic.com/graphql',
  fetch,
  headers,
  credentials: 'include',
});
