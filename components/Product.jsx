import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useCart } from 'react-use-cart'
import Link from 'next/link'
import Image from 'next/image'
import { formatCurrency } from '../lib'

export default function Product(props) {
  const { addItem } = useCart()

  return (
    <div className='w-full flex justify-start items-start flex-col gap-2'>
      <Link className='w-full' href={`/products/${props?.id}`}>
        <Image
          className='w-full h-[200px] object-cover rounded-lg'
          src={props?.image}
          alt={props?.name}
          width={300}
          height={300}
          placeholder='blur'
          blurDataURL={props?.image}
        />
      </Link>
      <p>{props?.name}</p>
      <div className='w-full flex justify-between items-center'>
        <p>{formatCurrency(props?.price, 'USD')}</p>
        <BsCartPlus onClick={() => addItem(props)}/>
      </div>
    </div>
  )
}
