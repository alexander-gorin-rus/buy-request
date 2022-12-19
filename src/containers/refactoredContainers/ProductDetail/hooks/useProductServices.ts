import { TFunction, useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Params, useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { APP_ROUTES } from '../../../../core/appRoutes';

export const useProductServices = (): [
  TFunction, Params, Dispatch, () => void,
] => {
  const { t } = useTranslation(['common', 'productForm']);
  const params = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirectToCatalog = () => navigate(APP_ROUTES.CATALOG);

  return [t, params, dispatch, redirectToCatalog];
};
