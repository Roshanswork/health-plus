import axios from 'axios';
import { showErrorToast } from '../lib/toast';
import { storage } from '../app';

export const api = axios.create({
    baseURL: 'http://10.0.2.2:7771/api',   // android emulator
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + storage.getString("access-token"),
    },
    timeout: 10000,
});


api.interceptors.request.use(
    (config) => {
        console.log(
            '🚀 API Request:',
            config.method?.toUpperCase(),
            config.url,
            config.data
        );
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        console.log(
            '✅ API Response:',
            response.config.url,
            response.data
        );
        return response;
    },
    (error) => {
        console.log(
            '❌ API Error:',
            error?.response?.config?.url,
            error?.response?.data
        );
        showErrorToast(error?.response?.data?.message)
        return Promise.reject(error);
    }
);
