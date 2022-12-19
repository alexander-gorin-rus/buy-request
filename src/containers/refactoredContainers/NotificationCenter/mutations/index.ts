import gql from 'graphql-tag';

export const deleteNotification = gql`
  mutation setNotificationsArchive($getIdsInput: GetIdsInput!) {
    setNotificationsArchive(ids: $getIdsInput) {
      isSuccess
    }
  }
`;
