import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './index';

export default {
  title: 'ProjectComponents/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: true,
  label: 'switch label',
  onClick: () => {},
};

export const Disabled = Template.bind({});

Disabled.args = {
  value: true,
  label: 'switch label',
  disabled: true,
  onClick: () => {},
};
