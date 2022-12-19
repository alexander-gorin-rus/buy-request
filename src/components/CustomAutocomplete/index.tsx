import React, { useMemo, memo, VFC } from 'react';
import {
  useAutocomplete,
} from '@mui/base/AutocompleteUnstyled';
import { uniqueId } from 'lodash';
import Badge from '../Badge';
import {
  InputWrapper, Listbox, Label, AutocompleteInput, StyledSpan,
} from './style';
import { IAutocompleteItem, IAutocompleteProps } from './types';
import { InputFieldWarning } from '../CustomStyledInput/style';

export const CustomAutocomplete: VFC<IAutocompleteProps> = memo(({
  itemsList, children, label, onChange, emptyValueText,
  tagsLocalization, placeholder, error, ...anyProps
}) => {
  const selectedValue: IAutocompleteItem[] = useMemo(
    () => (anyProps?.value || []).reduce(
      (acc, valueItem) => {
        const res = (itemsList || []).find(
          (item) => item.id === valueItem,
        );
        if (res) return [...acc, res];
        return acc;
      },
      [] as IAutocompleteItem[],
    ),
    [anyProps.value, itemsList],
  );

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    setAnchorEl,
    popupOpen,
  } = useAutocomplete({
    id: uniqueId(),
    defaultValue: [],
    multiple: true,
    options: itemsList,
    getOptionLabel: (option) => {
      if (tagsLocalization) return tagsLocalization(option);
      return option.name;
    },
    onChange: (_, option) => onChange(option),
    value: selectedValue,
  });

  return (
    <div {...anyProps}>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>{label}</Label>
        <InputWrapper ref={setAnchorEl} error={!!error}>
          <StyledSpan>
            {value.map((option: IAutocompleteItem, index: number) => (
              <Badge {...getTagProps({ index })} smallFont>
                {tagsLocalization ? tagsLocalization(option) : option.name}
              </Badge>
            ))}
          </StyledSpan>
          <AutocompleteInput
            {...getInputProps()}
            placeholder={value.length ? ' ' : placeholder}
          />

        </InputWrapper>
        <InputFieldWarning>{error}</InputFieldWarning>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof itemsList)?.map((
            option: IAutocompleteItem,
            index: number,
          ) => (
            <li {...getOptionProps({ option, index })}>
              <span>{tagsLocalization ? tagsLocalization(option) : option.name}</span>
            </li>

          ))}
        </Listbox>
      ) : popupOpen && (
      <Listbox>
        <li>
          <span>
            {emptyValueText}
          </span>
        </li>
      </Listbox>
      )}
    </div>
  );
});
