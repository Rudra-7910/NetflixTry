//analyzed
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies)
  if (!movies || movies.length === 0) {
    return <div className="h-screen bg-black w-full"></div>;
  }
  const mainMovie = movies[0];
  if (!mainMovie) return null;
  const {original_title, overview, id} = mainMovie;

  return (
    <div className="relative overflow-hidden bg-black pt-[20%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
