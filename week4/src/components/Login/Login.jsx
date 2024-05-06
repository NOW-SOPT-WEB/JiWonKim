import axios from 'axios';
import { API } from '../config'


export function login(id, password) {
    axios.post(API.LOGIN, {
      id,
      password
    })
    .then(response => {
      console.log('login success: ', response);
    })
    .catch(error => {
      console.log('login fail: ', error);
      alert('로그인 실패: ' + error.response.data.message);
    })
  }
  