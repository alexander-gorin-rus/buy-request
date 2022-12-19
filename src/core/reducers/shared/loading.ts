import types from '../../actionTypes';
import { IDefaultAction } from '../../types';

const initialState = false;
function loadingReducer(state:boolean, action: IDefaultAction<string, boolean>):boolean {
  const { type, payload } = action;
  switch (type) {
    case types.SET_IS_LOADING:
      return <boolean>payload;
    default:
      return initialState;
  }
}

export default loadingReducer;
