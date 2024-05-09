import * as S from './ModalStyle';

function Modal({ showModal, onClose }) {
    if (!showModal) return null;

    return (
        <S.ModalStyle>
            <S.ModalContentStyle>
                게임 성공!
                <button onClick={onClose}>닫기</button>
            </S.ModalContentStyle>
        </S.ModalStyle>
    );
}

export default Modal;
