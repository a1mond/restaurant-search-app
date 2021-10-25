import axios from 'axios';
import env from '../../config/envs';

const { BASE_URL, API_KEY } = env;

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});