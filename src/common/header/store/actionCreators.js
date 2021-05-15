import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE
} from './actionTypes';
import { fromJS } from 'immutable';
const axios = require('axios');

const changeList = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const search_focus_action = () =>({
  type: SEARCH_FOCUS
})

export const search_blur_action = () => ({
  type: SEARCH_BLUR
})

export const search_mouse_enter_action = () =>({
  type: MOUSE_ENTER
})

export const search_mouse_leave_action = () =>({
  type: MOUSE_LEAVE
})

export const change_page = (currentPage) => ({
  type: CHANGE_PAGE,
  currentPage
})

export const get_list = () => (dispatch) => {
  axios.get('/api/headerList.json').then(res => {
    const data = res.data.data;
    dispatch(changeList(data));
  })
}