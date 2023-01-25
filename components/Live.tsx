import Image from 'next/image'
import React from 'react'

type cardType ={
  img : string,
  title: string
}

export const MediumCard = ({img, title} : cardType) => {
  return(
    <div className='cursor-pointer hover:scale-105 transform transition duration-200 ease-out'>
      <div className='relative h-80 w-80'>
        <Image src={img} layout="fill" alt={title} />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

const Live = ({data} : any) => {
  return (
    <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
        <div className='mt-5 flex space-x-7 overflow-scroll scrollbar-hide pb-3'>
            {
              data?.map((dt : cardType) => <MediumCard key={dt.img} img={dt?.img} title={dt?.title} />)
            }
        </div>
    </section>
  )
}

export default Live