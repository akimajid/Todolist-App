import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Todos API
export const fetchTodos = () => axios.get(`${API_URL}/todos`);
export const fetchTodoById = (id) => axios.get(`${API_URL}/todos/${id}`);
export const createTodo = (todo) => axios.post(`${API_URL}/todos`, todo);
export const updateTodo = (id, todo) =>
  axios.put(`${API_URL}/todos/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`);

// Auth API
export const loginUser = (credentials) =>
  axios.post(`${API_URL}/users/login`, credentials);
export const registerUser = (userData) =>
  axios.post(`${API_URL}/users/register`, userData);
