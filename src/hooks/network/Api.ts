import axios from 'axios';

export const ApiClient = axios.create({
  baseURL: 'https://dev.shortly.com.br',
});
