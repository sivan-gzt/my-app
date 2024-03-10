import { JwtPayload, jwtDecode } from 'jwt-decode';
const TOKEN = 'token';

export const setTokenInLocalStorage = (encodedToken: string): void => localStorage.setItem(TOKEN, encodedToken);

export const getUser = (): JwtPayload | null => {
    try {
        const userToken = localStorage.getItem(TOKEN) as string;
        return jwtDecode(userToken);
    } catch (error) {
        return null;
    }
}

export const removeToken = (): void => localStorage.removeItem(TOKEN);

export const getToken = (): string | null => localStorage.getItem(TOKEN);