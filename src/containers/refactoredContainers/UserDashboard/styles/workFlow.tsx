import styled from 'styled-components';
import { IWorkFlowProps } from 'src/containers/refactoredContainers/UserDashboard/types';

export const ContentWrapper = styled.div`
    width: 272px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const WorkFlowSubtitle = styled.h3<IWorkFlowProps>`
    height: ${({ currentUserConsumer }) => (currentUserConsumer ? '22px' : '44px;')};
    font: ${(props) => props.theme.typography.h3.font};
`;

export const TextContent = styled.div`
    font: ${(props) => props.theme.typography.body2.font};
`;

export const WorkFlowText = styled.p`
    margin-top: 12px;
    margin-bottom: 23px;
`;

export const WorkFlowImage = styled.img`
    width: 90px;
    height: 90px;
`;

export const ImageMoneyInHand = styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 10px;
`;
