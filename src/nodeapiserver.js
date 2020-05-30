import axios from 'axios';

export default axios.create({
  baseURL: 'https://erm-node-api-server.herokuapp.com',
});
