import React, { FC } from 'react';

import { ModalBackground } from 'src/commonStyles/Modal';
import { IModalProps } from './types';

const Modal: FC<IModalProps> = ({ children, open }) => {
  if (open) {
    return (
      <ModalBackground>
        {children}
      </ModalBackground>
    );
  }
  return null;
};

export default Modal;
