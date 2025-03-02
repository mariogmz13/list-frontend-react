import axios from "axios";

const API_URL = "http://localhost:3000/activities"; 
// const API_URL = "https://reqres.in/api/users?page=2"; 

export const getItems = async (token) => axios.get(API_URL, {
    headers: {
        Authorization: `Bearer ${token}`,
      },
}
    
);
export const getItemById = async (id, token) => axios.get(`${API_URL}/${id}`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    }
);
export const createItem = async (data, token) => axios.post(API_URL, data,
    {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
export const updateItem = async (id, data, token) => axios.put(`${API_URL}/${id}`, data,
    {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });

export const deleteItem = async (id, token) => axios.delete(`${API_URL}/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`,
      },
});
