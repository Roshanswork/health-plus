
import { storage } from '../app';
import { showSuccessToast, toastConfig } from '../lib/toast';
import { ProfileResponse } from '../routes/private/profile/Profile';
import { api } from '../services/api';


export const registerApi = (data: any) =>
  api.post('/auth/register', data).then(res => res.data);


export const loginApi = function (payload: any) {
  return new Promise(function (resolve, reject) {
    api.post("auth/login", payload)
      .then(function (response) {
        resolve(response.data);
        storage.set('access-token', response.data.token)
        showSuccessToast(
          'Logged in successfully!',
          toastConfig
        );
      })
      .catch(function (error) {
        reject(error);
      });
  })
}

export const getProfile = function (payload: any) {
  return new Promise<ProfileResponse>(function (resolve, reject) {
    api.get("profile")
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}
