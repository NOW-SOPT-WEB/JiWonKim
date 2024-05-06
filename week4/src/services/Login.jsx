import axios from 'axios';
import { API } from '../utils/apiConfig';


export function login(authenticationId, password, LoginSuccess) {
    axios.post(API.LOGIN, {
      authenticationId,
      password
    })
    .then(response => {
      const locationHeader = response.headers.location;
      LoginSuccess(locationHeader);
    })
    .catch(error => {
      console.log('login fail: ', error);
      alert('로그인 실패: ' + error.response.data.message);
    })
  }
  