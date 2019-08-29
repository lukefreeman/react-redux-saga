import axios from 'axios';
const api = `https://jsonplaceholder.typicode.com`;

export default {

    fetchUser: (id) => {
        return axios.get(`${api}/users/${id}`);
    }

}