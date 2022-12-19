import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterFieldType, IFilterPopupProps } from './types';
import { FilterComponent } from '.';

export default {
  title: 'ProjectComponents/FilterComponent',
  component: FilterComponent,
  argTypes: {},
} as ComponentMeta<typeof FilterComponent>;

const Template: ComponentStory<typeof FilterComponent> = (args) => (
  <FilterComponent {...args} />
);

export const Primary = (args: IFilterPopupProps) => (
  <div>
    <FilterComponent
      {...args}
      onClose={() => {}}
      buttonTitle="Применить"
      scheme={[{
        name: 'status',
        fieldType: FilterFieldType.select,
        options: [
          { label: 'Не активен', value: 'DISABLE' },
          { label: 'Активен', value: 'IN_PROGRESS' },
        ],
        label: 'Статус',
        initialValue: '',
        optionPlaceholder: 'Выбрать статус',
      }]}
    />
  </div>
);
Primary.args = Template.bind({
  label: 'FilterComponent',
});
