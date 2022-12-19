import styled from 'styled-components';

export const ContentWrapper = styled.div`
    margin-top: 8px;
    font: ${(props) => props.theme.typography.body2.font};
`;

export const TitlePage = styled.h1`
    margin-bottom: 50px;
    font: ${(props) => props.theme.typography.h1.font};
`;

export const Content = styled.div`
  h3 {
    font: ${(props) => props.theme.typography.h3.font};
    margin-top: 50px;
    margin-bottom: 8px;
  }
  h4 {
    font: ${(props) => props.theme.typography.subtitle1.font};
    margin-top: 16px;
    margin-bottom: 4px;
  }
`;
