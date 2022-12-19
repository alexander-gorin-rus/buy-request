import gql from 'graphql-tag';

export const getClientRequests = gql`
  query getClientRequests($requestFilterInput: RequestFilterInput!) {
    tags {
      data {
        id
        name
        titleEn,
        titleRu
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
          cover
          title
          status
          media {
            fileOriginalName
            fileNameMinio
            mimetype
            bucket
          }
        }
        pageInfo {
          totalCount
          totalPageCount
        }
      }
    }
  }
`;
