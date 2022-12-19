import gql from 'graphql-tag';

export const getTags = gql`
  query getTags{
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
