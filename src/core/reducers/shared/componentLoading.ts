import types from '../../actionTypes';
import { IDefaultAction } from '../../types';

const initialState = false;
function loadingComponentReducer(state:boolean, action: IDefaultAction<string, boolean>):boolean {
  const { type, payload } = action;
  switch (type) {
    case types.SET_IS_COMPONENT_LOADING:
      return <boolean>payload;
    default:
      return initialState;
  }
}

export default loadingComponentReducer;
