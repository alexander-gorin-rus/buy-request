import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './index';
import { INavbarProps } from './types';
import { TypeUser } from '../../../../utils/constants';

export default {
  title: 'ProjectComponents/Header',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Default = (args: INavbarProps) => (
  <Navbar {...args} />
);

Default.args = Template.bind({});

Default.args = {
  user: {
    email: 'test@gmail.com',
    id: '1',
    name: 'Username',
    type: TypeUser.consumer,
    avatar: 'avatar.png',
  },
};

export const NotAuthorized = (args: INavbarProps) => (
  <Navbar {...args} />
);

NotAuthorized.args = Template.bind({});

NotAuthorized.args = {};
