import types from '../../actionTypes';
import { IAny, ICurrentUser, IDefaultAction } from '../../types';

interface IAccountState {
  currentUser: ICurrentUser | null | undefined;
}

const initialState: IAccountState = {
  currentUser: undefined,
};
const accountReducer = (
  state:IAccountState = initialState,
  action: IDefaultAction<string, IAny>,
):IAccountState => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload?.currentUser,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default accountReducer;
