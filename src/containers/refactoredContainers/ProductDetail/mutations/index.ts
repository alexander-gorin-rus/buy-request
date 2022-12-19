import gql from 'graphql-tag';

export const deleteProduct = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      isSuccess
     }
  }
`;

export const updateProduct = gql`
  mutation update($updateProductData: UpdateProductInput!) {
    updateProduct (updateProductData: $updateProductData) {
      isSuccess
    }
  }
`;
