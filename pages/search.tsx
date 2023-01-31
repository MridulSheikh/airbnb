import Footer from '@/components/Footer'
import Header from '@/components/Header'
import formatDate from '@/lib/formate'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const Infocard = ({img, location, title, star, price, total, description} : any) => {
    return(
        <div className='md:flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transform translate duration-300 first:border-t mt-5'>
            <div className='relative h-36 w-full mx-auto md:h-52 md:w-80 flex-shrink-0'>
                <Image src={img} fill className='object-cover' alt={title} />
            </div>
            <div className='flex flex-col flex-grow px-5'>
                <div className='flex justify-between w-full'>
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>
                <h4 className='text-xl'>{title}</h4>
                <div className='border-b w-10 pt-2'></div>
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                <div className='flex justify-between items-end'>
                    <p className='flex items-center'>
                      <StarIcon className='h-5 text-red-400' />
                      {star}
                    </p>
                    <div>
                        <p className='tex-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                        <p className='text-light font-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Search = ({searchResult} : any) => {
    const router = useRouter();
    const {location,startDate,endDate,numOfGuest} = router.query;
    const formatedStartDate = formatDate(startDate)
    const formatedendDate = formatDate(endDate)
  return (
    <div className='h-screen'>
        <Header />
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {formatedStartDate} - {formatedendDate} - for {numOfGuest} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex space-x-4'>
                    <p className='px-4 py-2 rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out border-2'>Cancellation Flexibility</p>
                    <p className='px-4 py-2 rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out border-2'>Type of place</p>
                    <p className='px-4 py-2 rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out border-2'>Price</p>
                    <p className='px-4 py-2 rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out border-2'>Rooms and Beds</p>
                    <p className='px-4 py-2 rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out border-2'>More filters</p>
                </div>
                <div>
                    {
                        searchResult?.map((sr:any) =>(
                            <Infocard
                            key={sr.img}
                            img={sr.img}
                            title={sr.title}
                            star={sr.star}
                            price={sr.price}
                            total={sr.total}
                            location={sr.location}
                            description={sr.description}
                            />
                        ))
                    }
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
    const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());
    return{
        props:{
            searchResult
        }
    }
}