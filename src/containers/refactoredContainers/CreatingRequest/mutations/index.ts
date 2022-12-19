import gql from 'graphql-tag';

export const createRequest = gql`
  mutation createRequest($createRequestData: CreateRequestInput!) {
    createRequest(createRequestData: $createRequestData) {
      isSuccess,
     }
  }
`;
