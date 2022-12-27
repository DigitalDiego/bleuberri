import React, { useEffect } from 'react'
import { Hero } from '../components'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '../data'
import { formatCurrency } from '../lib'

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 800
    })
  }, [])
  return (
    <>

      <Head>
        <title>BleuBerri</title>
        <link rel="shortcut icon" href="/bleuberri.svg" type="image/x-icon" />
      </Head>

      <Hero/>

      <div className='relative w-full h-screen'>
        <Image
          className='w-full h-full object-cover'
          src='/images/image-one.jpg'
          alt='living room with blue furniture'
          width={1000}
          height={1000}
        />
        <div className='absolute top-0 right-0 z-[1000] w-full h-full grid place-items-center'>
          <div className='flex justify-center items-center gap-2 flex-col'>
            <p className='text-5xl lg:text-8xl text-[linen] font-lobster'>BleuBerri</p>
            <Link className='px-4 py-2 rounded-lg bg-gray-800 text-[linen]' href='/products'>Shop now</Link>
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4 px-[5vw]'>
        <div className='w-full h-[15vh] grid place-items-center text-4xl'>
          <p>New Collection</p>
        </div>
        <div className='w-full flex justify-center items-center gap-[50px] flex-col lg:flex-row'>
          {data.slice(0, 4).map(({ id, name, image, price }) => (
            <div className='w-full lg:w-1/5 flex justify-center items-center gap-2 flex-col' key={id}>
              <Link className='w-full' href={`/products/${id}`}>
                <Image
                  className='w-full h-[200px] rounded-lg object-cover'
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                />
              </Link>
              <p className='text-lg font-bold'>{name}</p>
              <p>{formatCurrency(price, 'USD')}</p>
            </div>
          ))}
        </div>
        <div className='w-full h-[15vh] grid place-items-center'>
          <Link className='px-4 py-2 rounded-lg bg-gray-800 text-[linen]' href='/products'>Shop All</Link>
        </div>
      </div>

      <div className='relative w-full h-screen'>
        <Image
          className='w-full h-full object-cover'
          src='/images/image-two.jpg'
          alt='living room with nice furniture'
          width={1000}
          height={1000}
        />
        <div className='absolute top-0 right-0 w-full h-full grid place-items-center'>
          <div className='flex justify-center items-center flex-col gap-2'>
            <p className='text-5xl 2xl:text-8xl text-[linen] font-lobster'>BleuBerri</p>
            <Link href='/products' className='px-4 py-2 rounded-lg bg-gray-800 text-[linen]'>Shop now</Link>
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4 px-[5vw]'>
        <div className='w-full h-[15vh] grid place-items-center text-4xl'>
          <p>Featured</p>
        </div>
        <div className='w-full flex justify-center items-center gap-[50px] flex-col lg:flex-row'>
          {data.slice(4, 8).map(({ id, name, image, price }) => (
            <div className='w-full lg:w-1/5 flex justify-center items-center gap-2 flex-col' key={id}>
              <Link className='w-full' href={`/products/${id}`}>
                <Image
                  className='w-full h-[200px] rounded-lg object-cover'
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                />
              </Link>
              <p className='text-lg font-bold'>{name}</p>
              <p>{formatCurrency(price, 'USD')}</p>
            </div>
          ))}
        </div>
        <div className='w-full h-[15vh] grid place-items-center'>
          <Link className='px-4 py-2 rounded-lg bg-gray-800 text-[linen]' href='/products'>Shop All</Link>
        </div>
      </div>

    </>
  )
}
