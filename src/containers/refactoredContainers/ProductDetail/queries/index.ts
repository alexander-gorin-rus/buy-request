import gql from 'graphql-tag';

export const getProductById = gql`
  query getProductById($productFilterInput: ProductFilterInput!) {
    user {
      products(productFilterInput: $productFilterInput) {
        data {
          id
          production
          name
          model
          tags
          userId
          tagsData {
            id
            name
            titleEn
            titleRu
          }
          productionGuarantee
          description
            media {
              fileOriginalName
              fileNameMinio
              mimetype
            }
          userId
          cover
        }
      }
    }
  }
`;
