import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  mouseIn: false,
  focused: false,
  list: [],
  totalPage: 1,
  currentPage: 1
})

export const headerReducer = (state=initialState, action) =>{
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true);
    case SEARCH_BLUR:
      return state.set('focused', false);
    case CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case MOUSE_ENTER:
      return state.set('mouseIn', true);
    case MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case CHANGE_PAGE:
      let { currentPage } = action;
      if (currentPage === state.get('totalPage')) {
        currentPage = 1;
      }
      return state.set('currentPage', currentPage);
    default:
      return state;
  }
}