import styled from 'styled-components';

export const STypography = styled.p`
  font: ${({ theme }) => theme.typography.h3.font};
  color: ${({ theme }) => theme.palette.black};
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  text-align: center;

  @media screen and (max-width: 400px) {
    margin: 32px 0 16px;
  }

  @media screen and (min-width: 401px) {
    margin: 50px 0 24px;
  }
`;

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    width: auto;
  }
  
  svg {

    @media screen and (max-width: 400px) {
      width: 80px;
      height: 78px;
    }
    
  }
`;
