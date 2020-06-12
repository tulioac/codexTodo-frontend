import axios from 'axios';

export default axios.create({
  baseURL: 'https://codextodo-api.herokuapp.com'
});
