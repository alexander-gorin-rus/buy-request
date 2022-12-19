import gql from 'graphql-tag';

export const createFeedback = gql`
    mutation createRating($newRating: CreateRatingRequest!) {
        createRating(newRating: $newRating) {
            isSuccess,
        }
    }
`;
