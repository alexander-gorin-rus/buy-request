import gql from 'graphql-tag';

export const updateDeal = gql`
    mutation updateDeal($deal: UpdateDealRequest!) {
        updateDeal (deal: $deal) {
            isSuccess
        }
    }
`;
