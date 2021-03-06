/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInterceptors = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
});

axiosInterceptors.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: `Bearer ${Cookies.get('token')}`
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInterceptors.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 403) {
      Cookies.remove('token');
      localStorage.clear();
      if (Cookies.get('token')) {
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptors;
