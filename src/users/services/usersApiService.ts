import { loginData, signupData, signupNormalizedData } from '@/types/types';
import axios from 'axios';
import { JwtPayload } from 'jwt-decode';
import { getUser } from './localStorageService';

const apiUrl = import.meta.env.VITE_APP_API_URL || 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

export const login = async (user: loginData) => {
    try {
        const {
            data
        } = await axios.post(`${apiUrl}/login`, user);
        return data;
    } catch (error: any) {
        return Promise.reject(error.message);
    }
}
export const signup = async (user: signupNormalizedData) => {
    try {
        const {
            data
        } = await axios.post(`${apiUrl}`, user);
        return data;
    } catch (error: any) {
        return Promise.reject(error.message);
    }
}

// export const fetchUserDetails = async (userId: string) => {
//     const token = getUser();
//     try {
        
//         const { data } = await axios.get(`${apiUrl}/${userId}`, {
//             headers: {
//                 "x-auth-token": token,
//             }
//         })
//     } catch (error: any) {
//         return Promise.reject(error.message);
//     }
// }