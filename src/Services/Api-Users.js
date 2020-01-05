import axios from 'axios';


const apiUsers = axios.create({
    baseURL:  'https://api.github.com/users/'
});

export default apiUsers;