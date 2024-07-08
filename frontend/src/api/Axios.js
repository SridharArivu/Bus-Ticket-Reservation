import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://orbital-nuance-403709.el.r.appspot.com',
  // baseURL: 'http://localhost:8080'
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
