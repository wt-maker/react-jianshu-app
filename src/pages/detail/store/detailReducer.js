import {
  SET_ARTICLE_DETAIL
} from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  title: '',
  content: ''
});

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}