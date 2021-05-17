import axios from 'axios';
import { SET_ARTICLE_DETAIL } from './actionTypes';
import { fromJS } from 'immutable';

const get_article_detail_action = (title, content) => ({
  type: SET_ARTICLE_DETAIL,
  title: fromJS(title),
  content: fromJS(content)
})

export const get_article_detail = () => {
  return dispatch => {
    axios.get('/api/detail.json').then(res => {
      const {title, content} = res.data.data;
      dispatch(get_article_detail_action(title, content))
    });
  }
}