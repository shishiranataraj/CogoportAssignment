import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4400',
  headers: {  'X-Api-Key': '4a964a8a-2e37-45f2-b99d-69c71c98c757'}
});