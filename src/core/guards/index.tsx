import React, { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { TypeUser } from 'src/utils/constants';
import Preloader from 'src/components/Preloader';

import {
  getCurrentUserSelector, getLoadingSelector,
} from '../selectors';
import { APP_ROUTES } from '../appRoutes';
import { IGuard } from './types';

export const UnregisteredUsersGuard: FC<IGuard> = memo(({
  children,
}: IGuard) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isLoading = useSelector(getLoadingSelector);

  if (isLoading || currentUser === undefined) {
    return <Preloader isLayout />;
  }

  return currentUser ? children : <Navigate to={APP_ROUTES.LOGIN} />;
});

export const ConsumerGuard: FC<IGuard> = memo(({
  children,
}: IGuard) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isCurruntUserConsumer = currentUser && currentUser.type === TypeUser.consumer;

  return isCurruntUserConsumer ? children : <Navigate to={APP_ROUTES.DASHBOARD} />;
});

export const SellerGuard: FC<IGuard> = memo(({
  children,
}: IGuard) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isCurruntUserSeller = currentUser && currentUser.type === TypeUser.seller;

  return isCurruntUserSeller ? children : <Navigate to={APP_ROUTES.DASHBOARD} />;
});

export const ProfileGuard: FC<IGuard> = memo(({
  children,
}: IGuard) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isCurruntUser = currentUser && (currentUser.type === TypeUser.seller || TypeUser.consumer);

  return isCurruntUser ? children : <Navigate to={APP_ROUTES.DASHBOARD} />;
});

export const RegisteredUsersGuard: FC<IGuard> = memo(({
  children,
}: IGuard) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isLoading = useSelector(getLoadingSelector);

  if (isLoading || currentUser === undefined) {
    return <Preloader isLayout />;
  }

  return currentUser === null ? children : <Navigate to={APP_ROUTES.DASHBOARD} />;
});
