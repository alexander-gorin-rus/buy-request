import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomStyledInput from './index';
import { IInputProps } from './types';

export default {
  title: 'ProjectComponents/CustomInput',
  component: CustomStyledInput,
  argTypes: {
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
    allowableAmount: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof CustomStyledInput>;

const Template: ComponentStory<typeof CustomStyledInput> = (args) => (
  <CustomStyledInput {...args} />
);

export const Primary = (args: IInputProps) => (
  <div>
    <CustomStyledInput
      label="label"
      placeholder="placeholder"
      {...args}
      onChange={() => {}}
    />
  </div>
);

export const Error = (args: IInputProps) => (
  <div>
    <CustomStyledInput
      label="label"
      error="это поле не должно быть пустым"
      {...args}
      onChange={() => {}}
    />
  </div>
);

export const Disabled = (args: IInputProps) => (
  <div>
    <CustomStyledInput
      label="label"
      placeholder="placeholder"
      disabled
      {...args}
      onChange={() => {}}
    />
  </div>
);

export const WithCounter = (args: IInputProps) => (
  <div>
    <CustomStyledInput
      label="label"
      placeholder="placeholder"
      allowableAmount={1000}
      {...args}
      onChange={() => {}}
    />
  </div>
);

Primary.args = Template.bind({
  label: 'CustomInput',
});

Error.args = Template.bind({
  label: 'CustomInput empty field error text',
});

Disabled.args = Template.bind({
  label: 'CustomInput disabled',
});

WithCounter.args = Template.bind({
  label: 'WithCounter',
});
