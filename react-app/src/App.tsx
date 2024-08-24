import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

import { Movie } from './types'; 

const App: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [series, setSeries] = useState<Movie[]>([]);
	const [movieSearchValue, setMovieSearchValue] = useState<string>('');
	const [seriesSearchValue, setSeriesSearchValue] = useState<string>('');
  useEffect(() => {
		document.title = "Movie & Series Search App";
	}, []);

	// Fetch movies based on movie search value
	const getMovieRequest = async (searchValue: string) => {
		if (searchValue.trim() === '') {
			setMovies([]); // Clear movies if search value is empty
			return;
		}

		const url = `http://localhost:8080/api/movies/?search=${searchValue}&type=movies`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	// Fetch series based on series search value
	const getSeriesRequest = async (searchValue: string) => {
		if (searchValue.trim() === '') {
			setSeries([]); // Clear series if search value is empty
			return;
		}

		const url = `http://localhost:8080/api/series/?search=${searchValue}&type=series`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setSeries(responseJson.Search);
		}
	};

	// Fetch movies when movie search value changes
	useEffect(() => {
		getMovieRequest(movieSearchValue);
	}, [movieSearchValue]);

	// Fetch series when series search value changes
	useEffect(() => {
		getSeriesRequest(seriesSearchValue);
	}, [seriesSearchValue]);

	return (
		<div className=' movie-app'>
      <div  className="column1">
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Movies' />
          <SearchBox searchValue={movieSearchValue} setSearchValue={setMovieSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={movies} />
        </div>
      </div>
      <div className="column2">
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Series' />
          <SearchBox searchValue={seriesSearchValue} setSearchValue={setSeriesSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={series} />
        </div>
      </div>
		</div>
	);
};

export default App;
