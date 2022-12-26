import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative w-full h-[85vh] 2xl:h-[90vh]'>
      <video className='w-full h-full object-cover hidden lg:inline' src="/videos/hero.mp4" loop autoPlay muted/>
      <Image
        className='w-full h-full object-cover lg:hidden'
        src='/images/hero.jpg'
        alt='living room'
        width={300}
        height={300}
      />
      <div className='absolute top-0 right-0 z-[1000] w-full h-full bg-gray-800/50 grid place-items-center'>
        <p data-aos='fade-up' className='text-5xl font-lobster text-[linen]/50'>BleuBerri</p>
      </div>
    </div>
  )
}
