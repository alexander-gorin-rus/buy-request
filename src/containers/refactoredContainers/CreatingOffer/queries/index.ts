import gql from 'graphql-tag';

export const getProducts = gql`
  query getCatalog($productFilterInput: ProductFilterInput!) {
    user {
      products(productFilterInput: $productFilterInput) {
        data {
          id
          name
          media {
            fileNameMinio
            fileOriginalName
            mimetype
          }
        }
      }    
    }
  }
`;

export const getRequestData = gql`
query getRequestById($requestFilterInput: RequestFilterInput!) {
  user {
    requests(requestFilterInput: $requestFilterInput) {
      data {
        userId
        description
        budget
        id
        tags
        createdAt
        title
        requestAuthor {
          name
        }
      }
    }
  }
}
`;
