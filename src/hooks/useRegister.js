import { useMutation } from '@tanstack/react-query';
import { registerApi } from '../services/authApi';

export const useRegister = () => {
    return useMutation({
        mutationFn: registerApi,

        onSuccess: (data) => {
            console.log(data.message);
        },

        onError: (error) => {
            console.log(
                error?.response?.data?.message || 'Register failed'
            );
        },
    });
};
