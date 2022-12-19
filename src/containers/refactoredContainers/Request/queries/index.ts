import gql from 'graphql-tag';

export const getRequestById = gql`
  query getRequestById($requestFilterInput: RequestFilterInput!) {
    user {
      requests(requestFilterInput: $requestFilterInput) {
        data {
          description
          budget
          id
          tags
          tagsData {
            id
            name
            titleEn
            titleRu
          }
          createdAt
          title
          status
          products {
            id,
            name
          }
          readyForAnalogues
          media {
            fileOriginalName
            fileNameMinio
            mimetype
            bucket
          }
          userId
          requestAuthor {
            name
            surname
            avatar
          }
          ratingUser {
            userRating
          }
        }
      }
    }
  }
`;
