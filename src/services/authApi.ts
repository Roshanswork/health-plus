import { api } from '../services/api';

export const registerApi = (data: any) =>
  api.post('/auth/register', data).then(res => res.data);

export const loginApi = (data: any) =>
  api.post('/auth/login', data).then(res => res.data);



