import axios from "axios";

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
