import gql from 'graphql-tag';

export const createOffer = gql`
  mutation createQuote($createOfferData: CreateOfferInput!) {
    createOffer(createOfferData: $createOfferData) {
      isSuccess,
     }
  }
`;
