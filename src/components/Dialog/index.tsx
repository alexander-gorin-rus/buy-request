import React, { FC } from 'react';

import { ModalBackground } from 'src/commonStyles/Modal';
import { ModalContent } from './styles';
import { IModalProps } from './types';

const Dialog: FC<IModalProps> = ({ children, open }) => {
  if (open) {
    return (
      <ModalBackground>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalBackground>
    );
  }
  return null;
};

export default Dialog;
