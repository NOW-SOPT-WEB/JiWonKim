import axios from 'axios';
import { API } from '../utils/apiConfig'


export function join(authenticationId, password, nickname, phone) {
    return axios.post(API.JOIN, {
      authenticationId,
      password,
      nickname,
      phone
    })
    .then(response => {
      console.log('join success: ', response);
      alert('회원가입 성공', + response.data.message);
      return true;
    })
    .catch(error => {
      console.log('join fail: ', error);
      alert('회원가입 실패: ' + error.response.data.message);
      return false;
    })
  }
  