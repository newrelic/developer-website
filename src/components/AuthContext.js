import { createContext } from 'react';
import gql from 'graphql-tag';

export const fetchAuthDetails = () => {
  return { isAuthenticated: true };
};

export default createContext({
  isAuthenticated: false,
  user: null,
});

export const userQuery = gql`
  {
    actor {
      user {
        email
        id
        name
      }
    }
  }
`;
