import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './index';

export default {
  title: 'ProjectComponents/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'tooltip anchor',
  text: 'tooltip text',
};

const OverflowTemplate: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ width: '100px' }}>
    <Tooltip {...args} />
  </div>
);

export const Overflow = OverflowTemplate.bind({});

Overflow.args = {
  children: 'long text',
  text: 'tooltip text',
  showOnOverflow: true,
};
