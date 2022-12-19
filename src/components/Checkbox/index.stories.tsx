import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './index';
import { ICheckboxProps } from './types';

export default {
  title: 'ProjectComponents/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    alternative: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = (args: ICheckboxProps) => (
  <Checkbox {...args} />
);

Default.args = Template.bind({
  text: 'checkbox label',
});
