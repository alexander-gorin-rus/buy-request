import gql from 'graphql-tag';

export const getSellerProfile = gql`
  query seller($userId: String!) {
    seller {
      userName
      name
      surname
      phone
      company
      avatar
      setting {
        tags
        emails
      }
    }
    tags {
      data {
        id
        name
        titleEn
        titleRu
      }
    }
    user {
      ratings(userId: $userId) {
        userRating
      }
    }
  }
`;
