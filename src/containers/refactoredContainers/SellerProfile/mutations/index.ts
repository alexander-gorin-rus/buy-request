import gql from 'graphql-tag';

export const updateSellerProfile = gql`
  mutation updateSeller($params: UpdateSellerRequest!) {
    updateSeller(params: $params) {
      user {
        userName
        name
        surname
        phone
        company
        avatar
        setting {
          tags
          emails
        }
      }
    }
  }
`;

export const updateSellerSettings = gql`
  mutation updateSellerSetting($params: UpdateSellerSettingRequest!) {
    updateSellerSetting(params: $params) {
      isSuccess
    }
  }
`;
