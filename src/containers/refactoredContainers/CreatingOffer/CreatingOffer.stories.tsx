import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CreatingOffer from '.';

export default {
  title: 'CreatingOffer',
  component: CreatingOffer,
} as ComponentMeta<typeof CreatingOffer>;

const Template: ComponentStory<typeof CreatingOffer> = (args) => <CreatingOffer {...args} />;

export const FirstTemplate = Template.bind({});
