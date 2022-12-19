import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomStyledButton } from './index';
import { IButtonProps } from './types';
import { ReactComponent as Lightning } from '../../lightning.svg';

export default {
  title: 'ProjectComponents/CustomButton',
  component: CustomStyledButton,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof CustomStyledButton>;

const Template: ComponentStory<typeof CustomStyledButton> = (args) => (
  <CustomStyledButton {...args} />
);

export const Primary = (args: IButtonProps) => (
  <div>
    <CustomStyledButton
      {...args}
    >
      Button
    </CustomStyledButton>
  </div>
);
Primary.args = Template.bind({
  label: 'CustomButton',
});

export const Short = (args: IButtonProps) => (
  <div>
    <CustomStyledButton {...args}>
      Button
    </CustomStyledButton>
  </div>
);
Short.args = Template.bind({});

Short.args = {
  label: 'CustomButton',
  short: true,
};

export const WithIcon = (args: IButtonProps) => (
  <div>
    <CustomStyledButton
      {...args}
      noBorder
    >
      <Lightning />
      Button
    </CustomStyledButton>
  </div>
);
Short.args = Template.bind({});

Short.args = {
  label: 'WithIcon',
  short: false,
};
