import gql from 'graphql-tag';

export const getCurrentClientRequests = gql`
  query getCurrentClientRequests($requestFilterInput: RequestFilterInput!)  {
    user {
      requests(requestFilterInput: $requestFilterInput) {
        data {
          description
          budget
          id
          tags
          createdAt
          getCurrentClientRequests
        }
        pageInfo {
          totalCount
          totalPageCount
        }
      }
    }
}
`;
