import React from 'react'
import CelebrityCard from './CelebrityCard'

const PopularCelebrity = ({title, popularCelebrity}) => {
    return (
        <div className="px-6">
            <h1 className="text-lg md:text-3xl text-white py-4">{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className="flex">
                    {popularCelebrity?.map((celebrity) => (
                    <CelebrityCard key={celebrity.id} name={celebrity.name} imagePath={celebrity.profile_path} />
                    ))}
                </div>
            </div>
        </div>    
      )
}

export default PopularCelebrity
