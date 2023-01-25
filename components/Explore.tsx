import Image from 'next/image'
import React from 'react'

type ExploreCardprops = {
    location : string,
    img : string,
    distance : string
}

export const ExploreCard = ({location, img, distance} : ExploreCardprops) => {
    return(
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            <div className='relative h-16 w-16'>
                <Image 
                    src={img}
                    layout="fill"
                    alt={location}
                    className="rounded-lg"
                />
            </div>
            <div>
                <h2>{location}</h2>
                <h2 className='text-gray-500'>{distance}</h2>
            </div>
        </div>
    )
}

const Explore = ({explore} :  any) => {
  return (
    <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                explore?.map((ex : ExploreCardprops) => <ExploreCard key={ex?.location} location={ex?.location} img={ex.img} distance={ex.distance}  />)
            }
        </div>
    </section>
  )
}

export default Explore