import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popup from './index';

export default {
  title: 'ProjectComponents/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  description: 'Description',
  accept: () => {},
  cancel: () => {},
  acceptButtonTitle: 'accept',
  cancelButtonTitle: 'cancel',
};
