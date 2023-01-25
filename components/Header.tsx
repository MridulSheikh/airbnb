import Image from 'next/image'
import React from 'react'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 text-gray-500'>
        {/* left */}
        <div className='relative flex itmes-center h-10 cursor-pointer my-auto'>
            <Image src='https://links.papareact.com/qd3'
             layout='fill'
             className=' object-contain object-left'
             alt="logo"
              />
        </div>
        {/* middle */}
        <div className='flex border-2 overflow-hidden border-red-400 rounded-full pl-5 pr-1 items-center'>
            <input type="text" placeholder='Start Your Search' className='w-full h-full outline-none text-sm' />
            <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline" />
        </div>
        {/* right */}
        <div className='flex items-center justify-end space-x-4'>
          <p className='hidden md:inline'>Become a host</p>
          <GlobeAltIcon className='h-6' />
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6' />
          </div>
        </div>
    </header>
  )
}

export default Header