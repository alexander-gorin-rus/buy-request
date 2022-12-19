import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OpenMediaComponent from './index';

const media = [
  'https://w-dog.ru/wallpapers/1/10/468742918449957/grand-turk-fregat-parusnik-more.jpg',
  'https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg',
  'https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg',
  'https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg',
  'https://w-dog.ru/wallpapers/1/10/468742918449957/grand-turk-fregat-parusnik-more.jpg',
  'https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg',
  'https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg',
  'https://w-dog.ru/wallpapers/1/10/468742918449957/grand-turk-fregat-parusnik-more.jpg',
  'https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg',
];

export default {
  title: 'ProjectComponents/OpenMediaComponent',
  component: OpenMediaComponent,
  argTypes: {
    showModal: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof OpenMediaComponent>;

const Template: ComponentStory<typeof OpenMediaComponent> = (args) => (
  <OpenMediaComponent {...args} />
);

export const Default = Template.bind({});

Default.args = {
  open: true,
  media,
};
