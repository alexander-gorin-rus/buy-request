import gql from 'graphql-tag';

export const getUserProfile = gql`
  query consumer($userId: String!) {
    consumer {
      userName
      avatar
      name
      surname
      phone
    }
    user {
      ratings(userId: $userId) {
        userRating
      }
    }
  }
`;
