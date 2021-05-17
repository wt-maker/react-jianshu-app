import {
  SET_HOME_INFO,
  SET_MORE_ARTICLE_LIST,
  TOGGLE_SCROLL_TOP
} from './actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
});

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_INFO:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })
    case SET_MORE_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.data)
      })
    case TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}