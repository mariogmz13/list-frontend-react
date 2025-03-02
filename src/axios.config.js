// axios-config.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Interceptor para agregar el token a las solicitudes
axios.interceptors.request.use(
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

// Interceptor para verificar la validez del token en las respuestas
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem('token');
      navigate('/login');
    }
    return Promise.reject(error);
  }
);

export default axios;