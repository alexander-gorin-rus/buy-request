import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import IconBack from 'src/icons/IconBack';
import { BackButtonTitle, BackButtonWrapper } from './styles';
import { IBackButtonProps } from './types';

const BackButton: FC<IBackButtonProps> = memo(({ onClick, title, url }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (onClick) onClick();

    navigate(url);
  };

  return (
    <BackButtonWrapper onClick={handleOnClick}>
      <IconBack />
      <BackButtonTitle>{title}</BackButtonTitle>
    </BackButtonWrapper>
  );
});

export default BackButton;
