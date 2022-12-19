import { createAsyncActions } from '../../../utils/actionType';
import asyncActions from './asyncActions';

const asyncConstants = createAsyncActions(...asyncActions);

export default {
  ...asyncConstants,
};
