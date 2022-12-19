import React, { VFC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { CustomStyledButton } from '../../../../components/CustomStyledButton';
import { isCurrentUserConsumerSelector, isCurrentUserSellerSelector, getCurrentUserSelector } from '../../../../core/selectors';
import { IRequestActionsProps } from '../types';
import { APP_ROUTES } from '../../../../core/appRoutes';
import {
  StyledConsumerActionsContainer, StyledDelete, StyledEdit, StyledRequestActionsContainer,
} from '../styles';
import { RequestStatus } from '../../../../utils/constants';
import Switch from '../../../../components/Switch';
import Tooltip from '../../../../components/Tooltip';
import dispatchPromise from '../../../../utils/helpers';
import { deleteRequest, changeRequestActive } from '../actions/actions';
import Popup from '../../../../components/Popup';

const RequestActions: VFC<IRequestActionsProps> = ({ request }) => {
  const { t } = useTranslation('singleRequest');
  const { id, status, userId } = request;
  const [isDeleteWarningShowen, setShowDeleteWarning] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  const isCurrentUserConsumer = useSelector(isCurrentUserConsumerSelector);
  const isCurrentUserSeller = useSelector(isCurrentUserSellerSelector);
  const navigate = useNavigate();
  const isMyRequest = userId === currentUser?.id;

  const showDeleteWarning = () => setShowDeleteWarning(true);

  const hideDeleteWarning = () => setShowDeleteWarning(false);

  const redirectToOffer = () => {
    navigate(`${APP_ROUTES.OFFERS}/create/${id}`);
  };
  const onDeleteClick = () => {
    if (id) {
      dispatchPromise(dispatch, deleteRequest({ id })).then(() => {
        hideDeleteWarning();
        navigate(APP_ROUTES.REQUEST_MARKETPLACE);
      });
    }
  };

  const redirectToRequestEdit = () => {
    navigate(`${APP_ROUTES.REQUEST_MARKETPLACE}/${id}/edit`);
  };

  const switchOnClick = () => {
    if (id) { dispatch(changeRequestActive({ id, status })); }
  };

  if (isCurrentUserSeller
    && (status === RequestStatus.IN_PROGRESS || status === RequestStatus.DEFAULT_IN_PROGRESS)) {
    return (
      <StyledRequestActionsContainer>
        <CustomStyledButton primary onClick={redirectToOffer}>
          {t('buttons.makeOffer')}
        </CustomStyledButton>
      </StyledRequestActionsContainer>
    );
  }
  if (isCurrentUserConsumer && isMyRequest) {
    return (
      <>
        <StyledRequestActionsContainer>
          <StyledConsumerActionsContainer>
            <Tooltip text={t('buttons.edit')}>
              <StyledEdit onClick={redirectToRequestEdit} />
            </Tooltip>
            {status === RequestStatus.DEFAULT_IN_PROGRESS && (
            <Tooltip text={t('buttons.remove')}>
              <StyledDelete onClick={showDeleteWarning} />
            </Tooltip>
            )}
            {(status === RequestStatus.IN_PROGRESS || status === RequestStatus.DISABLE)
            && (
              <Switch
                label={t('showToSellers')}
                value={status === RequestStatus.IN_PROGRESS}
                onClick={switchOnClick}
              />
            )}
          </StyledConsumerActionsContainer>
        </StyledRequestActionsContainer>
        {isDeleteWarningShowen && (
          <Popup
            title={t('deleteWarning.title')}
            description={t('deleteWarning.description')}
            accept={onDeleteClick}
            cancel={hideDeleteWarning}
            acceptButtonTitle={t('deleteWarning.buttons.accept')}
            cancelButtonTitle={t('deleteWarning.buttons.cancel')}
          />
        )}
      </>
    );
  }
  return null;
};
export default RequestActions;
