import axios from 'axios';
import { API } from '../utils/apiConfig';


export function changePassword(previousPassword, newPassword, newPasswordVerification, memberId) {
    axios.patch(API.PASSWORD, {
        previousPassword,
        newPassword,
        newPasswordVerification
    }, {
        headers: {
            memberId: memberId
        }
    })
    .then(response => {
      console.log('changePassword success: ', response);
      alert('비밀번호 변경 성공')
    })
    .catch(error => {
      console.log('changePassword fail: ', error);
      alert('비밀번호 변경 실패: ' + error.response.data.message + previousPassword);
    })
  }
  