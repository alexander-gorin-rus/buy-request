import React, { useMemo, VFC } from 'react';
import { Controller, Path, useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import Select from 'src/components/Select';
import Checkbox from '../Checkbox';
import { CustomStyledButton } from '../CustomStyledButton';
import FilterModal from '../FilterModal';
import {
  FiltersWrapper,
  StyledTitle,
  ButtonWrapper,
} from './style';
import {
  IFilterPopupProps, IFilterForm, ISelectOption, FilterFieldType,
} from './types';
import { EMPTY_VALUES_MAP } from './constants';

export const FilterComponent: VFC<IFilterPopupProps> = ({
  scheme,
  onClose,
  buttonTitle,
  onSubmit,
}) => {
  const { t } = useTranslation('common');

  const { initialValues, emptyValues } = useMemo(() => ({
    initialValues: scheme.reduce((acc, item) => ({ ...acc, [item.name]: item.initialValue }), {}),
    emptyValues: scheme.reduce(
      (acc, item) => ({ ...acc, [item.name]: EMPTY_VALUES_MAP[item.fieldType] }),
      {},
    ),
  }), [scheme]);

  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    watch,
  } = useForm<IFilterForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
  });

  const formValues = watch();

  const submit = (values: IFilterForm) => {
    onSubmit(values);
    onClose();
  };

  const resetDisabled = useMemo(
    () => !Object.values(formValues).some((value) => value),
    [formValues],
  );

  const resetFilters = () => {
    onSubmit(emptyValues);
    reset(emptyValues);
  };

  return (
    <FilterModal
      onClose={onClose}
      onReset={resetFilters}
      resetDisabled={resetDisabled}
    >
      <form onSubmit={handleSubmit(submit)}>
        <FiltersWrapper>

          {scheme.map(({
            name, fieldType, options = [], label, optionPlaceholder,
          }) => {
            if (fieldType === FilterFieldType.select) {
              return (
                <Controller
                  name={name as Path<IFilterForm>}
                  control={control}
                  key={name}
                  render={({ field: { value, onChange } }) => (
                    <>
                      <StyledTitle>{label}</StyledTitle>
                      <Select
                        isClearable
                        options={options}
                        value={options.find((item: ISelectOption) => item.value === value) || null}
                        onChange={(selectedOption) => onChange(selectedOption?.value || '')}
                      // necessary evil
                        formatOptionLabel={(data: any) => t(data?.label)}
                        placeholder={optionPlaceholder}
                      />
                    </>

                  )}
                />
              );
            }
            if (fieldType === FilterFieldType.checkbox) {
              return (
                <Controller
                  name={name as Path<IFilterForm>}
                  control={control}
                  key={name}
                  render={({ field: { value, onChange } }) => (
                    <Checkbox
                      text={label}
                      value={value as boolean}
                      onClick={onChange}
                    />
                  )}
                />
              );
            }
            return null;
          })}
        </FiltersWrapper>
        <ButtonWrapper>
          <CustomStyledButton
            disabled={!isDirty}
            primary
            size="large"
          >
            {buttonTitle}
          </CustomStyledButton>
        </ButtonWrapper>
      </form>
    </FilterModal>
  );
};
