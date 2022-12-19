import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import { getCurrentUserSelector } from '../../../selectors';
import { getCurrentUser } from '../../../actions/actions';

import { ContentContainer, BodyContainer } from './styles';
import Footer from '../Footer/footer';

const BaseLayout = memo(({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  useEffect(() => {
    if (currentUser === undefined) {
      dispatch(getCurrentUser());
    }
  }, [currentUser, dispatch]);
  return (
    <ContentContainer>
      <Navbar user={currentUser} />
      {children}
      <Footer />
    </ContentContainer>
  );
});

export default BaseLayout;

export { BodyContainer };
