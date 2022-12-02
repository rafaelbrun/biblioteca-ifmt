import axios from 'axios';

const api = axios.create({
  baseURL: 'https://biblioteca-ifmt.herokuapp.com/',
});

export default api;
