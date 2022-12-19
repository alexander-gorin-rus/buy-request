import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ITextareaProps } from './types';
import CustomStyledTextarea from './index';

export default {
  title: 'ProjectComponents/CustomTextarea',
  component: CustomStyledTextarea,
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
} as ComponentMeta<typeof CustomStyledTextarea>;

const Template: ComponentStory<typeof CustomStyledTextarea> = (args) => (
  <CustomStyledTextarea {...args} />
);

export const Primary = (args: ITextareaProps) => (
  <div>
    <CustomStyledTextarea
      label="label"
      placeholder="placeholder"
      {...args}
      onChange={() => {}}
    />
  </div>
);

export const Error = (args: ITextareaProps) => (
  <div>
    <CustomStyledTextarea
      label="label"
      error="это поле не должно быть пустым"
      {...args}
      onChange={() => {}}
    />
  </div>
);

export const Disabled = (args: ITextareaProps) => (
  <div>
    <CustomStyledTextarea
      label="label"
      placeholder="placeholder"
      disabled
      {...args}
      onChange={() => {}}
    />
  </div>
);

export const WithCounter = (args: ITextareaProps) => (
  <div>
    <CustomStyledTextarea
      label="label"
      placeholder="placeholder"
      allowableAmount={255}
      {...args}
      onChange={() => {}}
    />
  </div>
);

Primary.args = Template.bind({
  label: 'CustomTextarea',
});

Error.args = Template.bind({
  label: 'CustomTextarea empty field error text',
});

Disabled.args = Template.bind({
  label: 'CustomTextarea disabled',
});

WithCounter.args = Template.bind({
  label: 'CustomTextarea with counter',
});
