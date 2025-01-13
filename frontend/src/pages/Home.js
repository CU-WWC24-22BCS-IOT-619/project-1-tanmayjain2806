import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <div className="movie-list">
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Home;
