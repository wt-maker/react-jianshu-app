import axios from 'axios';
import { SET_HOME_INFO, SET_MORE_ARTICLE_LIST, TOGGLE_SCROLL_TOP } from './actionTypes';
import { fromJS } from 'immutable';

const set_home_info_action = (topicList, articleList, recommendList) => ({
  type: SET_HOME_INFO,
  topicList: fromJS(topicList),
  articleList: fromJS(articleList),
  recommendList: fromJS(recommendList)
})

const set_more_article_list = (data) => ({
  type: SET_MORE_ARTICLE_LIST,
  data: fromJS(data)
})

export const get_home_info_action = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const {topicList, articleList, recommendList} = res.data.data;
      dispatch(set_home_info_action(topicList, articleList, recommendList))
    });
  }
}

export const get_more_article_list_action = () => {
  return dispatch => {
    axios.get('/api/homeList.json').then(
      res => {
        const { data } = res.data;
        dispatch(set_more_article_list(data))
      }
    )
  }
}

export const toggle_scroll_top_action = (show) => ({
  type: TOGGLE_SCROLL_TOP,
  show
})