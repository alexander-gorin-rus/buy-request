import gql from 'graphql-tag';

export const updateConsumer = gql`
  mutation updateConsumer($params: UpdateConsumerRequest!) {
    updateConsumer(params: $params) {
      user {
        surname
        name
      }
    }
  }
`;

export const updateSeller = gql`
  mutation updateSeller($params: UpdateSellerRequest!) {
    updateSeller(params: $params) {
      user {
        name
        surname
        company
      }
    }
  }
`;
