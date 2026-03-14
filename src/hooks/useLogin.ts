import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../services/authApi';

export const useLogin = () => {
    return useMutation({
        mutationFn: loginApi,

        onSuccess: async (data) => {
            console.log('Login success!');
        },

        onError: (error) => {
            console.log(
                error?.response?.data?.message || 'Login failed'
            );
        },
    });
};
