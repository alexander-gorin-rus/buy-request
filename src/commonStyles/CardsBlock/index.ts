import styled from 'styled-components';

export const TitleBlock = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 500px) {
    display: inline-block;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  gap: 34px;
`;

export const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 4.9rem;
  padding-top: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.largeDesktop}) {
    gap: 3rem 0.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobiletablet}) {
    gap: 3rem 6rem;
  }
`;
