import { API } from '../actions/types';
import axios from 'axios';

export const users = {
    
    /**
    * ----------------------------------------------------------------------
    * fetchUser
    * Fetch a single user from the api
    * @param {integer} id
    * ----------------------------------------------------------------------
    */
    fetchUser: (id) => {
        return axios.get(`${API}/users/${id}`);
    }

}