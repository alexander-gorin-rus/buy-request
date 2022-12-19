import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './index';

export default {
  title: 'ProjectComponents/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  total: 5,
  page: 1,
  onChange: () => {},
};
