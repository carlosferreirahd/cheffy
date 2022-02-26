import axios from 'axios';

const api = axios.create({
  baseURL: 'https://foodish-api.herokuapp.com/api/images/',
});

export default api;
