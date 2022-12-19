import React, {
  memo, useEffect, VFC,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from 'src/core/appRoutes';
import { AppState } from 'src/core/reducers';
import types from 'src/core/actionTypes/index';
import { getComponentLoadingSelector } from 'src/core/selectors';
import Preloader from 'src/components/Preloader';
import { StyledAuthWrapper } from 'src/core/layouts/styles';
import { ReactComponent as Success } from 'src/images/success.svg';
import { ReactComponent as Error } from 'src/images/error.svg';
import { CustomStyledButton } from 'src/components/CustomStyledButton';
import { STypography, StyledGroup } from './styles';

const VerifyEmailPage: VFC = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation('verifyEmail');
  const { id } = useParams();
  const { error, isSuccess } = useSelector((state: AppState) => state.verifyEmail);
  const isLoading = useSelector(getComponentLoadingSelector);

  const errorMessage = typeof error === 'string'
    ? t(`failure.${error}`)
    : t('failure.OTHER');

  const redirectToLogin = () => {
    navigate(APP_ROUTES.LOGIN);
  };

  const verifyEmail = () => {
    if (id) {
      dispatch({
        type: types.VERIFY_EMAIL_REQUEST,
        payload: { id },
      });
    }
  };

  useEffect(() => {
    verifyEmail();

    return () => {
      dispatch({
        type: types.CLEAR_VERIFY_EMAIL,
      });
    };
  }, [id]);

  if (isLoading) {
    return (
      <StyledAuthWrapper>
        <Preloader isComponent />
      </StyledAuthWrapper>
    );
  }

  return (
    <StyledAuthWrapper>
      <StyledGroup>
        {
          isSuccess && (
            <>
              <Success />
              <STypography>
                {t('success')}
              </STypography>
              <CustomStyledButton primary onClick={redirectToLogin}>
                {t('button.login')}
              </CustomStyledButton>
            </>
          )
        }
        {
          error && (
            <>
              <Error />
              <STypography>
                {errorMessage}
              </STypography>
              <CustomStyledButton primary onClick={verifyEmail}>
                {t('button.resend')}
              </CustomStyledButton>
            </>
          )
        }
      </StyledGroup>
    </StyledAuthWrapper>
  );
});

export default VerifyEmailPage;
