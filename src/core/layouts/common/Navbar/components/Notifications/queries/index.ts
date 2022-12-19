import gql from 'graphql-tag';

export const getAllNotifications = gql`
  query getAllNotifications($notificationsFilterInput: NotificationFilterInput!) {
    user {
      notifications(notificationsFilterInput: $notificationsFilterInput) {
        data {
          id
          type
          isRead
          userId
          message
          subjectId
          createdAt
        }
      }
    }
  }
`;
