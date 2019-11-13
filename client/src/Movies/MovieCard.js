import React from 'react';

const MovieCard = props => {
	const { movie } = props;
  return (
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <div key={movie.star} className="movie-star">
            {movie.star}
          </div>
        ))}
      </div>
  )
};

export default MovieCard;
