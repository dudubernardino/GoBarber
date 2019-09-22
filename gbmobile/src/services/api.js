import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.14:3333',
});

export default api;

/* 
  IOS: 'https://localhost:3333'
  Android: 'https://10.0.2.2:3333'
  USB: http://IP_Máquina:3333
*/
