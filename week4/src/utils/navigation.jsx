import { useNavigate } from 'react-router-dom';

export function useNavigation() {
    const navigate = useNavigate();

    function navigateToJoin() {
        navigate('/join');
    }

    function navigateToLogin() {
        navigate('/login');
    }

    return { navigateToJoin, navigateToLogin };
}
