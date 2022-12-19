import React from 'react';

import { PinInput } from './pin-input';

export default {
  title: 'Form/PinInput (Updated)',
  component: PinInput,
};

export const Primary = () => (
  <PinInput
    isError
    type="number"
    length={6}
    message="Новый код можно получить через 51 секунду"
    initialValue="12345"
    onChange={() => {}}
    onComplete={() => {}}
  />
);
