import React from 'react'
import { data } from '../../data'
import Head from 'next/head'
import { Product } from '../../components'

export default function Products() {
  return (
    <>

      <Head>
        <title>BleuBerri | Products</title>
      </Head>

      <div className='w-full grid grid-cols-1 place-items-start px-[5vw] py-5 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:max-w-7xl 2xl:mx-auto'>
        {data.map(item => (
          <Product {...item} key={item?.id}/>
        ))}
      </div>

    </>
  )
}
