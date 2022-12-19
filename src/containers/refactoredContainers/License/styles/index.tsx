import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    margin-top: 8px;
    font: ${(props) => props.theme.typography.body2.font};
`;

export const TitlePage = styled.h1`
    font: ${(props) => props.theme.typography.h1.font};
`;

export const SectionTitle = styled.h3`
    margin-top: 34px;
    margin-bottom: 20px;
    font: ${(props) => props.theme.typography.h3.font};
`;

export const Content = styled.div`
    p {
      margin-top: 20px;
    }
`;
