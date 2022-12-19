import React from 'react';
import { useSelector } from 'react-redux';
import { StyledAuthWrapper } from 'src/core/layouts/styles';
import { ReactComponent as Logo } from 'src/images/auth-inputs-header.svg';
import ResetPasswordEmailForm from './components/ResetPasswordEmailForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import { StyledGroup, StyledLogoWrapper } from './styles';
import { getResetPasswordStateSelector } from './selectors';

function ResetPassword() {
  const { isShowPasswordForm } = useSelector(getResetPasswordStateSelector);

  return (
    <StyledAuthWrapper>
      <StyledGroup>
        <StyledLogoWrapper>
          <Logo />
        </StyledLogoWrapper>
        {isShowPasswordForm
          ? <ResetPasswordForm />
          : <ResetPasswordEmailForm />}
      </StyledGroup>
    </StyledAuthWrapper>
  );
}

export default ResetPassword;
