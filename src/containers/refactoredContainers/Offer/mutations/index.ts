import gql from 'graphql-tag';

export const createDeal = gql`
  mutation createDeal($newDeal: CreateDealRequest!) {
    createDeal(newDeal: $newDeal) {
      isSuccess,
      id
     }
  }
`;

export const updateOffer = gql`
  mutation updateOffer($updateOfferData: UpdateOfferInput! ) {
    updateOffer(updateOfferData: $updateOfferData) {
        isSuccess,
      }
  }
`;
