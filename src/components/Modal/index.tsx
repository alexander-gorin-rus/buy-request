import { Dialog, DialogContent } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog/Dialog';
import React, { FC, memo } from 'react';

// https://mui.com/api/dialog/
const Modal: FC<DialogProps> = memo((props) => {
  const { children, ...other } = props;

  return (
    <Dialog {...other}>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
});

export default Modal;
