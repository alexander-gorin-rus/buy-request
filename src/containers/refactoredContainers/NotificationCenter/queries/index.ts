import gql from 'graphql-tag';

export const getNotifications = gql`
query getNotifications($notificationsFilterInput: NotificationFilterInput!) {
  user {
    notifications (notificationsFilterInput: $notificationsFilterInput) {
      data {
        id
        createdAt
        isRead
        message
        subjectId
        updatedAt
        userId
        type
        archive
        request {
          description
        }
        offer {
          description
        }
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
