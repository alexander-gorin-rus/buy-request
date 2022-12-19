import gql from 'graphql-tag';

export const markNotificationAsRead = gql`
  mutation markNotificationRead($getIdsInput: GetIdsInput!) {
    setNotificationsRead(ids: $getIdsInput) {
      isSuccess
    }
  }
`;
