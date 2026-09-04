import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full absolute inset-0 pt-[25%] md:pt-[15%] px-4 md:px-24 text-white bg-gradient-to-r from-black to-transparent z-10 aspect-video flex flex-col justify-end pb-8 md:pb-0 md:block bg-gradient-to-t md:bg-none via-black/40 from-black'>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none md:block hidden"></div>
      
      <div className="relative z-20 md:w-1/3">
        <h1 className='text-3xl md:text-6xl font-bold drop-shadow-lg'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg drop-shadow-md text-gray-200 line-clamp-3'>{overview}</p>
        <div className='my-2 md:my-0 flex gap-2 md:gap-3'>
          <button className='bg-white text-black font-semibold py-1 md:py-2 px-4 md:px-10 text-sm md:text-xl rounded-md hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center'>
            ▶ Play
          </button>
          <button className='hidden md:flex items-center justify-center bg-gray-500/70 text-white font-semibold py-2 px-10 text-xl rounded-md hover:bg-gray-500/90 transition-colors'>
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
