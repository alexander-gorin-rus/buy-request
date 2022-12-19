import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import IconClose from 'src/icons/IconClose';
import { IFilterModalProps } from './types';
import {
  FilterPopupWrapper,
  FiltersPopupCloseIcon,
  PopupModalHeader,
  PopupTitleWrapper,
} from './styles';
import { CustomStyledButton } from '../CustomStyledButton';

const FilterModal: FC<IFilterModalProps> = ({
  children, onClose, onReset, resetDisabled,
}) => {
  const { t } = useTranslation('filter');
  return (
    <FilterPopupWrapper>
      <PopupModalHeader>
        <PopupTitleWrapper>
          {t('title')}
        </PopupTitleWrapper>
        <CustomStyledButton onClick={onReset} noBorder disabled={resetDisabled}>
          {t('reset')}
        </CustomStyledButton>
        <FiltersPopupCloseIcon
          onClick={onClose}
        >
          <IconClose />
        </FiltersPopupCloseIcon>
      </PopupModalHeader>
      {children}
    </FilterPopupWrapper>
  );
};

export default FilterModal;
