import axios from 'axios';

const api = axios.create({
  baseURL: 'http:/10.226.78.195:3333',
})

export default api;