import gql from 'graphql-tag';

export const getCatalog = gql`
  query getCatalog($productFilterInput: ProductFilterInput!) {
    user {
      products(productFilterInput: $productFilterInput) {
        data {
          id
          name
          description
          tags
          media {
            fileOriginalName
            fileNameMinio
            mimetype
          }
          cover
          createdAt
          userId
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
