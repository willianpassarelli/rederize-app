import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-recruitment.herokuapp.com',
});

export default api;
