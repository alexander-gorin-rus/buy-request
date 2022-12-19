import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ISelectProps } from './types';
import Select from './index';

export default {
  title: 'ProjectComponents/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const Default = (args: ISelectProps) => (
  <div>
    <Select
      {...args}
      isClearable
      options={[
        { label: 'Не активен', value: 'DISABLE' },
        { label: 'Активен', value: 'IN_PROGRESS' },
      ]}
      placeholder="Выбрать статус"
    />
  </div>
);
Default.args = Template.bind({
});
