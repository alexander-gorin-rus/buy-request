import gql from 'graphql-tag';

export const getOfferById = gql`
  query getOfferById ($offerFilterInput: OfferFilterInput!) {
    user {
      offers (offerFilterInput: $offerFilterInput) {
        data {
          title
          status
          description
          price
          id
          userId
          requestId
          additionalConditions
          createdAt
          media {
            fileOriginalName
            fileNameMinio
            mimetype
            bucket
          }
          product {
            tags
            tagsData
              {
                id
                name
                titleEn
                titleRu
              }
          }
          offerAuthor {
            name
            surname
            avatar
          }
          ratingUser {
            userRating
          }
        }
      }
    }
 }
`;

export const getRequestData = gql`
query getRequestById($requestFilterInput: RequestFilterInput!) {
  user {
    requests(requestFilterInput: $requestFilterInput) {
      data {
        description
        budget
        id
        title
        requestAuthor {
          name
        }
      }
    }
  }
}
`;
