import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomSlider from './index';

export default {
  title: 'ProjectComponents/CustomSlider',
  component: CustomSlider,
} as ComponentMeta<typeof CustomSlider>;

const Template: ComponentStory<typeof CustomSlider> = (args) => <CustomSlider {...args} />;

const items = [{
  id: 1,
  src: 'https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg',
}, {
  id: 2,
  src: 'https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg',
}, {
  id: 3,
  src: 'https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg',
}, {
  id: 4,
  src: 'https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg',
}, {
  id: 5,
  src: 'https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg',
}, {
  id: 6,
  src: 'https://www.ejin.ru/wp-content/uploads/2017/09/17-524.jpg',
}];

export const Default = Template.bind({});

Default.args = {
  style: {
    width: '272px',
  },
  items,
};

export const SlidesToShow = Template.bind({});

SlidesToShow.args = {
  items,
  slidesToShow: 2,
};

export const ShowPreview = Template.bind({});

ShowPreview.args = {
  items,
};
