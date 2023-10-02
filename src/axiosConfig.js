import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Modify the request URL if it is not an absolute URL
    if (!config.url.startsWith('http') && !config.url.startsWith('//')) {
      config.url = instance.defaults.baseURL + config.url;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
