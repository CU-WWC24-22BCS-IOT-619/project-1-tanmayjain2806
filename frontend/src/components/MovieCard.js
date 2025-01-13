import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Genre: {movie.genre.join(', ')}</p>
        </div>
    );
};

export default MovieCard;
