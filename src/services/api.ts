import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.0.2.2:7771/api',   // android emulator
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

