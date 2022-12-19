import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserRatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px;
        margin-top: 20px;
    }
`;

export const Username = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 29px;
    line-height: 34px;
    text-align: right;
    color: #000000;
    margin-bottom: 8px;
`;

export const Rating = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #C4C4C4;
    display: inline-flex;
    align-items: center;
`;

export const ReviewsLink = styled(Link)`
    margin-left: 11px;
    color: #C4C4C4;
`;
