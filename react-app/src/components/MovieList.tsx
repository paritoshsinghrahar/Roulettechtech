import React from 'react';
import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  // Filter out movies without a valid poster
  const filteredMovies = movies.filter(movie => movie.Poster && movie.Poster !== 'N/A');

  return (
    <>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.imdbID} className='image-container d-flex justify-content m-3'>
            <img src={movie.Poster} alt='movie poster' />
          </div>
        ))
      ) : (
        <p>Title Not Found</p>
      )}
    </>
  );
};

export default MovieList;
