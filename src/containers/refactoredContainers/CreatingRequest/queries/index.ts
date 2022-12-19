import gql from 'graphql-tag';

export const getTags = gql`
  query getTags($productFilterInput: ProductFilterInput!){
    tags {
      data {
        id
        name
        titleEn
        titleRu
      }
    }
    products(productFilterInput: $productFilterInput) {
      data {
        id
        name
        model
        tags
        media {
          fileNameMinio
          fileOriginalName
          mimetype
        }
      }
    }
  }
`;
