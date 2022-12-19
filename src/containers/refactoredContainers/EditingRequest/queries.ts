import gql from 'graphql-tag';

export const getRequestById = gql`
  query getRequestById($requestFilterInput: RequestFilterInput!) {
    user {
      requests(requestFilterInput: $requestFilterInput) {
        data {
          id
          description
          budget
          tags
          title
          products {
            name
            id
            cover
            media {
              fileOriginalName
              fileNameMinio
              mimetype
            }
          }
          media {
            fileOriginalName
            fileNameMinio
            mimetype
            bucket
          }
        }
      }
    }
  }
`;
