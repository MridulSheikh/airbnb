import Image from "next/image";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuest, setNumOfGuest] = useState("1");
  const router = useRouter();
  function handleSelect(range: any) {
          setStartDate(range.selection.startDate)
          setEndDate(range.selection.endDate)  
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleGuest = (e : any) => {
    if(parseInt(e.target.value) > 50){
      setNumOfGuest("50")
    }
    else if(parseInt(e.target.value) < 1 || e.target.value === "" ){
      setNumOfGuest("1")
    }
    else{
      setNumOfGuest(e.target.value)
    }
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query:{
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate : endDate.toISOString(),
        numOfGuest
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 md:grid grid-cols-3 bg-white shadow-md p-5 md:px-10 text-gray-500">
      {/* left */}
      <div onClick={()=> router.push('/')} className="relative flex itmes-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          className=" object-contain object-left"
          alt="logo"
        />
      </div>
      {/* middle */}
      <div className="flex border-2 overflow-hidden border-red-400 rounded-full pl-5 pr-1 items-center">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start Your Search"
          value={searchInput}
          className="w-full h-full outline-none text-sm"
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      <div />
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker 
          ranges={[selectionRange]} 
          minDate={new Date()} 
          rangeColors={["#FD5B61"]} 
          onChange={handleSelect}
           />
           <div className="flex items-center border-b mb-4">
            <h2 className="tex-2xl flex-grow font-semibold">Number fo Guests</h2>
            <UsersIcon className="h-5" />
            <input type="number" className="w-10 ml-4 outline-none text-red-400"   onChange={handleGuest} value={numOfGuest} min={0} max={50} />
           </div>
           <div className="flex justify-around items-center font-semibold">
            <button onClick={()=>setSearchInput("")}>Cancel</button>
            <button onClick={search} className="text-red-400">Search</button>
           </div>
        </div>
      )}
      <div />
    </header>
  );
};

export default Header;
