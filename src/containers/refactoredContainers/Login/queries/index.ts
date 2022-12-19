import gql from 'graphql-tag';

export const getCurrentUser = gql`
  query getCurrentUser {
    user {
      id,
      type,
      name,
      email,
      avatar
    }
  }  
`;
