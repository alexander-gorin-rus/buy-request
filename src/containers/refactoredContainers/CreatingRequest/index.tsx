import React, {
  memo, SyntheticEvent, VFC,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { createQuoteRequest } from './actions/actions';
import { RequestTitle } from './styles/styledComponents';
import dispatchPromise from '../../../utils/helpers';
import { getComponentLoadingSelector } from '../../../core/selectors';
import { CustomStyledButton } from '../../../components/CustomStyledButton';
import { APP_ROUTES } from '../../../core/appRoutes';
import RequestForm from '../../../components/RequestForm';
import { IRequestForm } from '../../../components/RequestForm/types';

const CreatingRequest: VFC = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoadingCreatingRequest = useSelector(getComponentLoadingSelector);
  const { t } = useTranslation(['creatingRequest']);

  const onSubmit = (createRequest: IRequestForm): void => {
    dispatchPromise(dispatch, createQuoteRequest({
      ...createRequest,
      isDraft: true,
    })).then(() => {
      navigate('/');
    });
  };

  const handleRedirect = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(APP_ROUTES.REQUEST_MARKETPLACE);
  };

  return (
    <>
      <RequestTitle>{t('creatingRequest:title')}</RequestTitle>
      <RequestForm
        isSubmitted={isLoadingCreatingRequest}
        onSubmit={onSubmit}
      >
        <CustomStyledButton onClick={handleRedirect} size="large">
          {t('creatingRequest:form.buttons.close')}
        </CustomStyledButton>
        <CustomStyledButton primary size="large" isLoading={isLoadingCreatingRequest}>
          {t('creatingRequest:form.buttons.publish')}
        </CustomStyledButton>
      </RequestForm>
    </>
  );
});

export default CreatingRequest;
