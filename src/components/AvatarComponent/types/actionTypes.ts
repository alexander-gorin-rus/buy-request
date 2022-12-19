import { createAsyncActions } from '../../../utils/actionType';
import asyncActions from '../actions/asyncActions';

const asyncConstants = createAsyncActions(...asyncActions);

export default {
  ...asyncConstants,
};
