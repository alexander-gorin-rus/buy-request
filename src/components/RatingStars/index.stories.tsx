import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RatingStars from './index';

export default {
  title: 'ProjectComponents/RatingStars',
  component: RatingStars,
} as ComponentMeta<typeof RatingStars>;

const Template: ComponentStory<typeof RatingStars> = (args) => <RatingStars {...args} />;

export const OneStar = Template.bind({});

OneStar.args = {
  value: 0,
};

export const PathOfStars = Template.bind({});

PathOfStars.args = {
  filledStarsCount: 3,
  value: 0,
};
