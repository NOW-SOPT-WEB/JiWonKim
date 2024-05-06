import axios from 'axios';
import { API } from '../utils/apiConfig';


export function info(memberId) {
    return axios.get(API.INFO, {
        headers: {
            memberId: memberId
        }
    })
    .then(response => {
        const { authenticationId, nickname, phone } = response.data.data;
        console.log(`info success ${authenticationId} : `, response);
        return { authenticationId, nickname, phone };
    })
    .catch(error => {
      console.log('login fail: ', error);
      alert('로그인 실패: ' + error.response.data.message);
      return null;
    })
  }
  