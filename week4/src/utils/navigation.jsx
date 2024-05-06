import { useNavigate } from 'react-router-dom';

export function useNavigation() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const navigateToJoin = () => {
        navigate('/join');
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    const navigateToInfo = (userId) => {
        navigate(`/info/${userId}`);
    }

    return { goBack, navigateToJoin, navigateToLogin, navigateToInfo };
}
