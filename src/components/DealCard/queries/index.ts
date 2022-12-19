import gql from 'graphql-tag';

export const deal = gql`
  query deals($dealFilterInput: DealFilterInput!) {
    user {
      deals(dealFilterInput: $dealFilterInput) {
        data {
          additionalConditions
          consumerId
          createdAt
          id
          offer {
            title
            product {
              media {
                fileOriginalName
                fileNameMinio
                mimetype
              }
              name
              tagsData
              {
                  id
                  name
                  titleEn
                  titleRu
              }
            }
            media {
              fileOriginalName
              fileNameMinio
              mimetype
              bucket
            }
            cover
            price
            description
            offerAuthor {
              avatar
                name
                surname
            }
          }
          request {
            id
            title
            budget
            tags
            tagsData
              {
                id
                name
                titleEn
                titleRu
              }
            description
            requestAuthor
              {
                avatar
                name
                surname
              }
          }
          rating {
            data {
              authorId
            }
          }
          offerId
          sellerId
          status
          updatedAt
        }
      }
    }
  }
`;
