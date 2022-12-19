import gql from 'graphql-tag';

export const updateRequest = gql`
  mutation updateRequest($updateRequestData: UpdateRequestInput!) {
    updateRequest(updateRequestInput: $updateRequestData) {
      isSuccess,
     }
  }
`;
