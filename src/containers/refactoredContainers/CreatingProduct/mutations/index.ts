import gql from 'graphql-tag';

export const createProduct = gql`
  mutation createProduct($createProductData: CreateProductInput!) {
    createProduct(createProductData: $createProductData) {
      isSuccess,
     }
  }
`;
