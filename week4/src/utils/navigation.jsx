import { useNavigate } from 'react-router-dom';

export function useNavigation() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goHome = () => {
        navigate('/');
    }

    const navigateToJoin = () => {
        navigate('/join');
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    const navigateToInfo = (memberId) => {
        navigate(`/info/${memberId}`);
    }

    return { goBack, goHome, navigateToJoin, navigateToLogin, navigateToInfo };
}
