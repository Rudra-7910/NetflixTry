import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  return (
    <div className="bg-black pb-10">
      <div className='relative -mt-12 md:-mt-52 z-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies} />
      </div>

      {/*
        MovieList - popular 
        MovieList- NowPlaying
        MovieList- Trending 
        MovieList- horror
        
       */}
    </div>
  )
}

export default SecondaryContainer
