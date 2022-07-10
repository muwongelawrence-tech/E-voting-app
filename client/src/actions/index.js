import axios from 'axios';
import { useDispatch } from 'react-redux';
import { FETCH_USER } from './types';



export const fetchUser = () => 
  async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER , payload: res });
  
  };

  
//   return {
//     type: FETCH_USER,
//     payload: request
//   };
