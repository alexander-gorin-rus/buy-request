import gql from 'graphql-tag';

export const getDeals = gql`
query getDeals($dealFilterInput: DealFilterInput!) {
  user {
    deals (dealFilterInput: $dealFilterInput) {
      data {
        id
        status
        createdAt
        expiratedAt
        offer {
          description
          price
          ratingUser {
            userRating
          }
          offerAuthor {
            id
            avatar
            name
          }
          media {
            fileOriginalName
            fileNameMinio
            mimetype
            bucket
          }
          cover 
          product {
            name
          }
        }
        request {
          tags
          ratingUser {
            userRating
          }
          requestAuthor {
            avatar
            name
          }
        }
      }
      pageInfo {
        page
        perPage
        totalCount
        totalPageCount
      }
    }
  }
}
`;
