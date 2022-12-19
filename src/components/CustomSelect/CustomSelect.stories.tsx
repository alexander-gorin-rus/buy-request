import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomSelect } from './index';
import { ISelectProps } from './types';

export default {
  title: 'ProjectComponents/CustomSelect',
  component: CustomSelect,
  argTypes: {

  },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => (
  <CustomSelect {...args} />
);

export const Primary = (args: ISelectProps) => (
  <div>
    <CustomSelect
      {...args}
    />
  </div>
);
Primary.args = Template.bind({
  label: 'CustomButton',
});
