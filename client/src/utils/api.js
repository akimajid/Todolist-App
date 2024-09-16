import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Todos API
export const fetchTodos = () => api.get(`/todos`);
export const fetchTodoById = (id) => api.get(`/todos/${id}`);
export const createTodo = (todo) => api.post(`/todos`, todo);
export const updateTodo = (id, todo) => api.put(`/todos/${id}`, todo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

// Auth API
export const loginUser = (credentials) => api.post(`/users/login`, credentials);
export const registerUser = (userData) => api.post(`/users/register`, userData);
