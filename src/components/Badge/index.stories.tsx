import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './index';

export default {
  title: 'ProjectComponents/Badge',
  component: Badge,
  argTypes: {
    alternative: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Badge',
};

export const WithDelete = Template.bind({});

WithDelete.args = {
  children: 'Badge with delete button',
  onDelete: () => {},
};

export const Alternative = Template.bind({});

Alternative.args = {
  children: 'Alternative',
  alternative: true,
};

export const SmallFont = Template.bind({});

SmallFont.args = {
  children: 'SmallFont',
  smallFont: true,
};
