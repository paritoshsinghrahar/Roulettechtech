import React from 'react';

interface MovieListHeadingProps {
  heading: string;
}

const MovieListHeading: React.FC<MovieListHeadingProps> = ({ heading }) => {
  return (
    <div className='col'>
      <h1>{heading}</h1>
    </div>
  );
};

export default MovieListHeading;
