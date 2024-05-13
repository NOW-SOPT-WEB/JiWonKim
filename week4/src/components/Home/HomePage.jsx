import * as S from './HomePageStyle'
import * as C from '../CommonStyle'
import { useNavigation } from '../../utils/navigation'
import ReactPlayer from 'react-player'
import { useState } from 'react'

export default function MainPage() {
  const { navigateToLogin, navigateToJoin } = useNavigation()
  const [playing, setPlaying] = useState(false)

  return (
    <S.Main>
      <S.Header>
        <h1>로그인 / 회원가입</h1>
      </S.Header>
      <ReactPlayer
        url="https://www.youtube.com/shorts/8rqx9nA-9-c"
        playing={playing}
        controls={true}
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Pause' : 'Play'}
      </button>
      {/* <S.MainImg src="./src/assets/잠만보.jpg" /> */}
      <C.BtnContainer>
        <C.Btn onClick={navigateToLogin}>내 정보</C.Btn>
        <C.Btn onClick={navigateToJoin}>회원가입</C.Btn>
      </C.BtnContainer>
    </S.Main>
  )
}
