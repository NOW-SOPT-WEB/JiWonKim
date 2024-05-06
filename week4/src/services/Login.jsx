import axios from 'axios';
import { API } from '../utils/apiConfig';


export function login(authenticationId, password) {
    axios.post(API.LOGIN, {
      authenticationId,
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
  