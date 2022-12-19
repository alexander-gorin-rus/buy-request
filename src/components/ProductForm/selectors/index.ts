import { createSelector } from 'reselect';

import { AppState } from '../../../core/reducers';

const getTags = (state: AppState) => state.productFrom.tags;

export const getTagsSelector = createSelector(getTags, (tags) => tags);
