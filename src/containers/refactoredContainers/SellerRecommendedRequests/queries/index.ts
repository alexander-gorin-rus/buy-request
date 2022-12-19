import gql from 'graphql-tag';

export const getClientRequests = gql`
  query getClientRequests($requestFilterInput: RequestFilterInput!) {
    seller {
      setting {
        tags
      }
    }
    user {
      requests(requestFilterInput: $requestFilterInput) {
        data {
          id
          budget
          description
          tags
          createdAt          
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
