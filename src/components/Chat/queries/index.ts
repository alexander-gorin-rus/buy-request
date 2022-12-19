import gql from 'graphql-tag';

export const getUserById = gql`
    query client($userId: String!) {
        client(userId: $userId) {
            name
            surname
            avatar
        }
    }
`;
