import gql from 'graphql-tag';

export const updateRequest = gql`
  mutation updateRequest($updateRequestInput: UpdateRequestInput!) {
    updateRequest(updateRequestInput: $updateRequestInput) {
      isSuccess,
     }
  }
`;
