import React from 'react'

export default function Hero() {
  return (
    <div className='relative w-full h-[85vh] 2xl:h-[90vh]'>
      <video className='w-full h-full object-cover' src="/videos/hero.mp4" loop autoPlay muted></video>
      <div className='absolute top-0 right-0 z-[1000] w-full h-full bg-gray-800/50 grid place-items-center'>
        <p data-aos='fade-up' className='text-5xl font-lobster text-[linen]/50'>BleuBerri</p>
      </div>
    </div>
  )
}
