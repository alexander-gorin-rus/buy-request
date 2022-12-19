import gql from 'graphql-tag';

export const getOffers = gql`
  query getOffers($offerFilterInput: OfferFilterInput!) {
    user {
      offers (offerFilterInput: $offerFilterInput) {
        data {
          title
          description
          price
          id
          createdAt
          status
          product {
              name
              production
          }
          cover
          media {
            bucket
            fileNameMinio
            fileOriginalName
            mimetype
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
