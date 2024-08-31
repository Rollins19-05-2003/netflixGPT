import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

import PopularCelebrity from './PopularCelebrity';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <PopularCelebrity title={"Popular Celebrity"} popularCelebrity={movies.popularCelebrity} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer;