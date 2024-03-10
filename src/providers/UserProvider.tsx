import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getToken, getUser, removeToken } from "../services/usersLocalStorageService";
import { ProviderProps } from "react";

interface UserContextType {
    user: JwtPayload | null;
    setUser: React.Dispatch<React.SetStateAction<JwtPayload | null>>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const TOKEN = 'token';
const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<ProviderProps<UserContextType>> = ({ children }) => {
    const [user, setUser] = useState<JwtPayload | null>(() => {
        const userFromLS = getUser();
        if (userFromLS) {
            return userFromLS;
        }
        return null;
    });

    const [token, setToken] = useState<string | null>(() => {
        const tokenFromLS = getToken();
        return tokenFromLS;
    });

    useEffect(() => {
        if (!user) {
            removeToken();
        }
    }, [user]);

    const value = useMemo(() => ({ user, setUser, token, setToken }), [user, token]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
