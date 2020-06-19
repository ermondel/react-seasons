import axios from 'axios';

export const jsonplaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const nodeapiserver = axios.create({
  baseURL: 'https://erm-node-api-server.herokuapp.com',
});

export const reduxblog = axios.create({
  baseURL: 'https://reduxblog.herokuapp.com/api',
});
