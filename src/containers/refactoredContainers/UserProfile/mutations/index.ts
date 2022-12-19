import gql from 'graphql-tag';

export const putUserProfile = gql`
  mutation updateConsumer($params: UpdateConsumerRequest!) {
    updateConsumer(params: $params) {
      user {
        avatar
        surname
        name
        phone
        userName
      }
    }
  }
`;
