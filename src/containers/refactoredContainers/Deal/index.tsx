import React, {
  memo, useMemo, useState, VFC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import Chat from 'src/components/Chat';
import DealCard from 'src/components/DealCard';
import { getDealSelector } from 'src/components/DealCard/selectors';
import Dialog from 'src/components/Dialog';
import { APP_ROUTES } from 'src/core/appRoutes';
import { getComponentLoadingSelector, getCurrentUserSelector } from 'src/core/selectors';
import { TypeUser } from 'src/utils/constants';
import { ReactComponent as ArrowBack } from 'src/arrow-back.svg';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { ReactComponent as Lightning } from 'src/lightning.svg';
import FeedbackForm from '../FeedbackForm';
import Report from '../Report';
import ConsumerDealControlButtons from './components/ConsumerDealControlButtons';
import SellerDealControlButtons from './components/SellerDealControlButtons';
import { StyledBackArrowContainer, StyledButtonsBlock, ButtonWrapper } from './styles';

const Deal: VFC = memo(() => {
  const { t } = useTranslation(['common', 'deal']);
  const { dealId } = useParams<{ dealId: string }>();
  const navigate = useNavigate();
  const dealData = useSelector(getDealSelector);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const isLoadingDealCard = useSelector(getComponentLoadingSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const isVisibleEstimateButton = useMemo(() => (
    !dealData?.rating?.data?.filter((item) => item.authorId === currentUser?.id)?.length
  ), [dealData, currentUser]);

  const toggleComplain = () => setOpenReport(!openReport);
  const toggleFeedback = () => setOpenFeedback(!openFeedback);
  const backToDealsList = () => {
    navigate(`${APP_ROUTES.MY_DEALS}`);
  };
  const toggleChatView = () => setIsChatOpen(!isChatOpen);

  return (
    <>
      <StyledBackArrowContainer onClick={backToDealsList}>
        <ArrowBack />
        {t('deal:title')}
      </StyledBackArrowContainer>
      <div>
        <div>
          {dealId && currentUser && (
          <DealCard
            toggleChatView={toggleChatView}
            dealId={dealId}
            currentUser={currentUser}
          />
          )}
        </div>
      </div>
      <StyledButtonsBlock>
        {!isLoadingDealCard && dealData && dealId && (
          currentUser?.type === TypeUser.consumer
            ? (
              <ConsumerDealControlButtons
                status={dealData.status}
                dealId={dealId}
                toggleFeedback={toggleFeedback}
                isVisibleEstimateButton={isVisibleEstimateButton}
              />
            )
            : (
              <SellerDealControlButtons
                status={dealData.status}
                dealId={dealId}
                toggleFeedback={toggleFeedback}
                isVisibleEstimateButton={isVisibleEstimateButton}
              />
            )
        )}
        <ButtonWrapper>
          <CustomStyledButton
            onClick={toggleComplain}
            noBorder
          >
            <Lightning />
            {t('common:form.button.complain')}
          </CustomStyledButton>
        </ButtonWrapper>

      </StyledButtonsBlock>
      {dealData && (
        <Chat
          userIds={[dealData.consumerId, dealData.sellerId]}
          currentUserId={currentUser?.id}
          dealId={dealId}
          isChatOpen={isChatOpen}
          toggleChatView={toggleChatView}
        />
      )}
      {dealId && (
        <>
          <Dialog open={openReport}>
            <Report entityId={dealId} toggle={toggleComplain} />
          </Dialog>
          <Dialog open={openFeedback}>
            <FeedbackForm toggle={toggleFeedback} entityId={dealId} entityName="Deal" />
          </Dialog>
        </>
      )}
    </>
  );
});

export default Deal;
