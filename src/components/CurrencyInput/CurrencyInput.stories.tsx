import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CurrencyInput from './index';
import { ICurrencyInputProps } from './types';

export default {
  title: 'ProjectComponents/CurrencyInput',
  component: CurrencyInput,
  argTypes: {
    value: {
      options: 'value',
      control: { type: 'text' },
    },
    onChange: {
      options: 'onChange',
      action: 'onChange',
    },
    onChangeCurrency: {
      options: 'onChangeCurrency',
      action: 'onChange Currency',
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    label: {
      options: 'label',
      control: { type: 'text' },
    },
    placeholder: {
      options: 'placeholder',
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => {
  const [value, setValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <CurrencyInput
      {...args}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export const Primary = (args: ICurrencyInputProps) => (
  <div>
    <CurrencyInput
      label="label"
      placeholder="placeholder"
      {...args}
    />
  </div>
);

export const Error = (args: ICurrencyInputProps) => (
  <div>
    <CurrencyInput
      error="Error text"
      label="Currency input error"
      placeholder="placeholder"
      {...args}
    />
  </div>
);

export const Disabled = (args: ICurrencyInputProps) => (
  <div>
    <CurrencyInput
      disabled
      label="Currency input disabled"
      placeholder="Currency input disabled"
      {...args}
    />
  </div>
);

Primary.args = Template.bind({
  label: 'Currency input',
});

Error.args = Template.bind({
  label: 'Currency input error',
});

Disabled.args = Template.bind({
  label: 'Currency input disabled',
});
