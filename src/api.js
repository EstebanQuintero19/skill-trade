// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia esta URL a la de tu backend
});

export default api;
