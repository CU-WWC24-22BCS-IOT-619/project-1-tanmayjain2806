import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

export const fetchMovies = async () => {
    const response = await api.get('/movies');
    return response.data;
};
