import { IInputsWrapperProps } from 'src/core/types';
import styled from 'styled-components';

export const AuthWrapper = styled.div`
  min-height: calc(100vh - 64px - 40px);
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: auto;
  @media(max-width: 870px) {
    justify-content: center;
  }
`;

export const ManFigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media(max-width: 870px) {
    display: none;
  }
`;

export const ManFigure = styled.div`
  width: 25vw;
`;

export const WomanFigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 870px) {
    display: none;
  }
`;

export const WomanFigure = styled.div`
  width: 25vw;
`;

export const InputsWrapper = styled.div<IInputsWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 0;
  width: 50vw;
  max-width: 600px;
  @media(max-width: 800px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

export const AuthLoginTitleWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

export const AuthLoginTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 190px;
  height: 26px;
  margin-bottom: 12px;
`;

export const IconCheckWrapper = styled.div`
  width: 100px;
  height: 100px;
  @media(max-width: 570px) {
    width: 80px;
    height: 80px;
  }
`;
