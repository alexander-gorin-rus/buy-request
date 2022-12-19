import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './index';

export default {
  title: 'ProjectComponents/Modal',
  component: Modal,
  argTypes: {
    showModal: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    Empty modal content
  </Modal>
);

export const Default = Template.bind({});

Default.args = {
  open: true,
};
