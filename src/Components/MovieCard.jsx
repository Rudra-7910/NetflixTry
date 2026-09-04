//analyzed
import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({posterPath, movieId}) => {
  const navigate = useNavigate();

  if(!posterPath) return null;

  return (
    <div className='w-36 md:w-48 pr-2 md:pr-4' onClick={() => navigate(`/watch/${movieId}`)}>
        <img alt="Movie Card" src={IMG_CDN+posterPath} className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow" />
    </div>
  )
}

export default MovieCard
