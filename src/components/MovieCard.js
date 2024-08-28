import React from 'react'
import { MOVIE_CARD_URL } from '../utils/constants'

const MovieCard = ({imagePath}) => {
  if (!imagePath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img alt='Movie card' src={MOVIE_CARD_URL + imagePath}></img>
    </div>
  )
}
export default MovieCard