import axios from 'axios';

const api = axios.create({
  baseURL: 'http:/10.10.2.138:3333',
})

export default api;