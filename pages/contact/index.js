import React from 'react'

export default function Contact() {
  return (
    <div className='w-full min-h-[85vh] flex justify-center items-center flex-col gap-2 px-[5vw]'>
        <div className='w-3/5 flex items-center flex-col lg:flex-row gap-2 2xl:w-2/5'>
            <div className='w-full lg:w-1/2 flex justify-start items-start flex-col gap-2'>
                <p>Name</p>
                <input className='w-full px-4 py-2 border-solid border-[1px] border-gray-800 rounded-lg bg-transparent outline-none' type="text" />
            </div>
            <div className='w-full lg:w-1/2 flex justify-start items-start flex-col gap-2'>
                <p>Email</p>
                <input className='w-full px-4 py-2 border-solid border-[1px] border-gray-800 rounded-lg bg-transparent outline-none' type="email" />
            </div>
        </div>
        <div className='w-3/5 flex justify-start items-start flex-col gap-2 2xl:w-2/5'>
            <p>Message</p>
            <textarea className='w-full h-[200px] px-4 py-2 border-solid border-[1px] border-gray-800 rounded-lg bg-transparent outline-none resize-none'></textarea>
        </div>
        <button className='px-4 py-2 bg-gray-800 text-[linen] border-none outline-none rounded-lg'>Send</button>
    </div>
  )
}
