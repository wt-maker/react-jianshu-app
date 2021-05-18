import axios from 'axios';
import { CHANGE_LOGOUT, CHANGE_LOGIN } from './arctionTypes';

const change_user_login_status = () => ({
  type: CHANGE_LOGIN,
  status: true
})

export const change_login_action = (username, password) => {
  return dispatch => {
    axios.get('/api/login.json').then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(change_user_login_status());
      } else {
        alert('登陆失败');
      }
    })
  }
}

export const change_logout_action = () => ({
  type: CHANGE_LOGOUT,
  status: false
})