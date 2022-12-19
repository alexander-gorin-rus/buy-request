import gql from 'graphql-tag';

export const getUserProfileData = gql`
  query getUserProfileData($currentUserId: String!) {
    user {
      deals(dealFilterInput: { statuses: [] }) {
         pageInfo {
          totalCount
        }
      },
      offers(offerFilterInput: { statuses: [] }) {
         pageInfo {
          totalCount
        }
      },
      requests(requestFilterInput: { statuses: [] }) {
         pageInfo {
          totalCount
        }
      },
      ratings(userId: $currentUserId) {
        userRating,
        data {
          value
        }
      }
      userName,
      surname,
      name,
      avatar,
      email,
      id,
      type
    }
  } 
`;

export const getSellerProfile = gql`
  query seller {
    seller {
      company,
      setting {
        tags
      }
    }
    tags {
      data {
        id
        name
        titleEn
        titleRu
      }
    }
  }
`;

export const getRatings = gql`
  query getRatings($userId: String!, $page: Int, $perPage: Int) {
    user {
      deals(dealFilterInput: { statuses: [] }) {
         data {
          id,
          offer {
            title
          },
          request {
            title
          }
        }
      },
      ratings(userId: $userId, page: $page, perPage: $perPage) {
        data {
          createdAt,
          entityId,
          id,
          value,
          comment
        },
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
