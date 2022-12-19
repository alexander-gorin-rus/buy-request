import { createAsyncActions } from 'src/utils/actionType';
import asyncActions from './asyncActions';

const asyncConstants = createAsyncActions(...asyncActions);

export default {
  ...asyncConstants,
};
