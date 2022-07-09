import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = async () => {
  const user =  await axios.get('/api/current_user');

};