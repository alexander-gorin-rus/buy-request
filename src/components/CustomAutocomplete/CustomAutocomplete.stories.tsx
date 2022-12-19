import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomAutocomplete } from './index';
import { IAutocompleteItem, IAutocompleteProps } from './types';

export default {
  title: 'ProjectComponents/CustomAutocomplete',
  component: CustomAutocomplete,
  argTypes: {

  },
} as ComponentMeta<typeof CustomAutocomplete>;

const Template: ComponentStory<typeof CustomAutocomplete> = (args) => (
  <CustomAutocomplete {...args} />
);
const listItems : IAutocompleteItem[] = [{ name: 'apple', id: 'number' },
  { name: 'banana', id: 'number2' }, { name: 'orange', id: 'number3' },
  { name: 'strawberry', id: 'number4' }];
const label : string = 'Label';
const placeholder: string = 'Enter placeholder';

export const Primary = (args: IAutocompleteProps) => (
  <div style={{ width: '250px', position: 'relative' }}>
    <CustomAutocomplete
      {...args}
      label={label}
      itemsList={listItems}
      placeholder={placeholder}
    />
  </div>
);

Primary.args = Template.bind({
  label: 'CustomButton',
});
