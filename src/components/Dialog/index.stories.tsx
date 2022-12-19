import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './index';

export default {
  title: 'ProjectComponents/Dialog',
  component: Dialog,
  argTypes: {
    showModal: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}>
    Empty dialog content
  </Dialog>
);

export const Default = Template.bind({});

Default.args = {
  open: true,
};
