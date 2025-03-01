import axios from "axios";

const API_URL = "http://localhost:3000"; 
// const API_URL = "https://reqres.in/api/users?page=2"; 

export const getItems = async () => axios.get(API_URL);
export const getItemById = async (id) => axios.get(`${API_URL}/${id}`);
export const createItem = async (data) => axios.post(API_URL, data);
export const updateItem = async (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteItem = async (id) => axios.delete(`${API_URL}/${id}`);
