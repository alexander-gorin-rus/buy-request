import styled from 'styled-components';

export const StyledEmptyListPlaceholderContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3rem;
    font: ${({ theme }) => theme.typography.h1.font};
    &>img {
        margin-right: 19px;
    }
`;
