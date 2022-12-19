import gql from 'graphql-tag';

export const saveTags = gql`
  mutation saveTags($params: UpdateSellerSettingRequest!) {
    updateSellerSetting(params: $params) {
      isSuccess
    }
  }
`;
