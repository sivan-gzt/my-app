import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "./useAxios";
import { login, signup } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/usersLocalStorageService";
import ROUTES from "../routes/routesModel";
import normalizeUser from "../lib/normalizeUser";
import { JwtPayload } from 'jwt-decode'; // Import JwtPayload type


interface UserState {
    users: JwtPayload[] | null;
    loading: boolean;
    error: string | null;
}

const useUsers = (): {
    users: JwtPayload[] | null;
    user: JwtPayload | null;
    loading: boolean;
    error: string | null;
    handleLogin: (user: { email: string; password: string; }) => void;
    handleSignup: (user: { email: string; password: string; }) => void;
    handleLogout: () => void;
} => {

    const [state, setState] = useState<UserState>({
        users: null,
        loading: false,
        error: null
    });

    const navigate = useNavigate();
    const { setUser, setToken } = useUser();

    useAxios();

    const requestStatus = useCallback((loading: boolean, errorMessage: string | null, users: JwtPayload[] | null, user: JwtPayload | null = null) => {
        setState({
            users,
            loading,
            error: errorMessage
        });
        setUser(user);
    }, [setUser]);

    const handleLogin = useCallback(async (user: { email: string; password: string; }) => {
        try {
            const token = await login(user);
            setTokenInLocalStorage(token);
            setToken(token);
            const userFromLocalStorage = getUser() as JwtPayload;


            requestStatus(false, null, null, userFromLocalStorage);
            navigate(ROUTES.CARDS);
        } catch (error: any) {
            requestStatus(false, error.message, null);
        }
    }, [navigate, requestStatus, setToken]);

    const handleSignup = useCallback(async (user: { email: string; password: string; }) => {
        try {
            const normalizedUser = normalizeUser(user);
            await signup(normalizedUser);
            await handleLogin({ email: user.email, password: user.password });
        } catch (error: any) {
            requestStatus(false, error.message, null);
        }
    }, [requestStatus, handleLogin]);

    const handleLogout = useCallback(() => {
        removeToken();
        setToken(null);
        setUser(null);
    }, [setUser, setToken]);

    return {
        ...state,
        user: null, // Here you can define initial value for user if needed
        handleLogin,
        handleLogout,
        handleSignup
    };
};

export default useUsers;
