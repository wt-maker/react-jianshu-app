import { fromJS } from 'immutable';
import { CHANGE_LOGOUT, CHANGE_LOGIN } from './arctionTypes';

const initialState = fromJS({
  loginStatus: false
});

export const loginReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return state.set('loginStatus', action.status)
    case CHANGE_LOGOUT:
      return state.set('loginStatus', action.status)
    default:
      return state;
  }
}