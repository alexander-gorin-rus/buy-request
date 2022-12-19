import React, {
  memo, useCallback, useEffect, VFC,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locale } from '../../i18next';
import { getTagsSelector } from '../ProductForm/selectors';
import { fetchTagsRequest } from '../ProductForm/actions/actions';
import { StyledChip } from '../../containers/refactoredContainers/DealList/styles';

export interface CustomChipProps {
  item: string;
}
const CustomChip: VFC<CustomChipProps> = memo(({ item }) => {
  const dispatch = useDispatch();
  const allTags = useSelector(getTagsSelector);
  const dispatchTags = useCallback(() => {
    dispatch(fetchTagsRequest());
  }, [dispatch]);
  useEffect(() => {
    dispatchTags();
  }, [dispatch]);

  return (
    <StyledChip
      key={item}
      variant="outlined"
      label={locale === 'en' ? allTags?.find((d) => d?.id === item)?.titleEn
        : allTags?.find((d) => d?.id === item)?.titleRu}
    />
  );
});

export default CustomChip;
