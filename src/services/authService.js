import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3000";
// const API_URL = "https://reqres.in/api";

export const login = async (email, password) => {
  try{
    console.log(password);
    const res = await axios.post(`${API_URL}/auth/login`,{
          email,
          password,
        });
    console.log(res.data);
    // console.log(`Token: ${res.data.token}`);
    if(res.data.ok){
      setToken(res.data.token)
    }
    return res.data;
  }catch(e){
    console.log(e);
    return e.response.data
  }
};

export const register = async (email, username, password) => {
  try{
    console.log(password);
    const res = await axios.post(`${API_URL}/auth/register`,{
          email,
          username,
          password,
        });
    console.log(res.data);
    // console.log(`Token: ${res.data.token}`);
    if(res.data.ok){
      setToken(res.data.token)
    }
    return res.data;
  }catch(e){
    console.log(e);
    return e.response.data
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => localStorage.getItem("token");

export const verifyToken = () => {
  const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const expiracion = decodedToken.exp;
      const ahora = Math.floor(Date.now() / 1000);

      if (expiracion < ahora) {
        console.log('Token expirado');
        localStorage.removeItem('token');
      } else {
        console.log('Token válido');
        return true
      }
    } else {
      console.log('No hay token');
    }
    return false;
}