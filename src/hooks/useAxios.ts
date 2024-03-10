import axios from 'axios';
import { toast } from "sonner"

import { useUser } from "../users/providers/UserProvider";
import {
    useEffect
} from 'react';

const useAxios = () => {

    // const snack = useSnackbar();
    const {
        token
    } = useUser();

    useEffect(() => {


        axios.defaults.headers.common['x-auth-token'] = token;
        // axios.defaults.headers.common.Authorization = token;


    }, [token]);

}

export default useAxios;