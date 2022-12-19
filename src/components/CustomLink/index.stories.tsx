import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomLink from './index';
import { ICustomLinkProps } from './types';

export default {
  title: 'ProjectComponents/CustomLink',
  component: CustomLink,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const Primary = (args: ICustomLinkProps) => (
  <div>
    <CustomLink {...args}>
      Link
    </CustomLink>
  </div>
);
Primary.args = Template.bind({
});
