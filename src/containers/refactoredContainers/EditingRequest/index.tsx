import React, {
  VFC, SyntheticEvent, useEffect, useMemo, EffectCallback,
} from 'react';
import { useParams, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from './styles';
import { getRequest, clearRequest, updateRequest } from './actions/actions';
import RequestForm from '../../../components/RequestForm';
import { CustomStyledButton } from '../../../components/CustomStyledButton';
import { APP_ROUTES } from '../../../core/appRoutes';
import dispatchPromise from '../../../utils/helpers';
import { getRequestSelector } from './selectors';
import { IRequestForm } from '../../../components/RequestForm/types';
import { getComponentLoadingSelector } from '../../../core/selectors';

const EditingRequest: VFC = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const isLoadingCreatingRequest = useSelector(getComponentLoadingSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation('editingRequest');

  const request = useSelector(getRequestSelector);

  const handleRedirect = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(APP_ROUTES.REQUEST_MARKETPLACE);
  };

  useEffect(() => {
    if (requestId) dispatch(getRequest({ id: requestId }));
  }, [requestId]);

  useEffect((): ReturnType<EffectCallback> => (): void => {
    dispatch(clearRequest());
  }, []);

  const initialValues = useMemo(
    () => {
      if (request) {
        return {
          title: request.title,
          tags: request.tags,
          products: request.products.map((product) => product.id),
          budget: request?.budget,
          description: request.description,
          media: request.media || [],
        };
      }
      return undefined;
    },
    [request, requestId],
  );

  const onSubmit = (requestForm: IRequestForm): void => {
    dispatchPromise(dispatch, updateRequest({
      request: {
        ...request,
        ...requestForm,
      },
    })).then(() => {
      navigate(APP_ROUTES.REQUEST_MARKETPLACE);
    });
  };

  return (
    <>
      <Title>{t('title')}</Title>
      <RequestForm
        isSubmitted={isLoadingCreatingRequest}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <CustomStyledButton onClick={handleRedirect} size="large">
          {t('buttons.cancel')}
        </CustomStyledButton>
        <CustomStyledButton primary size="large">
          {t('buttons.save')}
        </CustomStyledButton>
      </RequestForm>
    </>
  );
};

export default EditingRequest;
