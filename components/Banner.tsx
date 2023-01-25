import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image
        src={"https://links.papareact.com/0fm"}
        layout="fill"
        className='object-cover'
        alt="bannerImage"
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg font-medium'>Not sure Where to go? Perfect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 hover:drop-shadow-2xl active:scale-90 ease-linear duration-200'>I&apos;m flexible</button>
        </div>
    </div>
  )
}

export default Banner