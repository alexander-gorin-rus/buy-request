import styled from 'styled-components';

export const SItem = styled.li`
  cursor: pointer;
  display: grid;
  gap: 12px;
  grid-template-columns: 40px 1fr;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.quaternaryGray};

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const SIcon = styled.div<{ type: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, type }) => {
    switch (type) {
      case 'INFO':
        return theme.palette.skyBlue;
      case 'SUCCESS':
        return theme.palette.green;
      case 'DANGER':
        return theme.palette.red;
      case 'MESSAGE':
        return theme.palette.secondaryGray;

      default:
        return theme.palette.secondaryGray;
    }
  }};
`;

export const STitle = styled.p`
  max-width: 130px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.black};
  font: ${({ theme }) => theme.typography.subtitle2.font};
  word-break: break-word;
`;

export const SSubtitle = styled.p`
  color: ${({ theme }) => theme.palette.gray};
  font: ${({ theme }) => theme.typography.overline.font};
`;

export const STitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-bottom: 4px;
`;

export const SDate = styled.p`
  color: ${({ theme }) => theme.palette.secondaryGray};
  font: ${({ theme }) => theme.typography.overline.font};
`;
