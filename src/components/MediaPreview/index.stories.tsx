import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MediaPreview from './index';

export default {
  title: 'ProjectComponents/MediaPreview',
  component: MediaPreview,
} as ComponentMeta<typeof MediaPreview>;

const Template: ComponentStory<typeof MediaPreview> = (args) => <MediaPreview {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
};

export const WithMark = Template.bind({});

WithMark.args = {
  url: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  mark: 'main',
};
