import React from 'react'
import bg  from "../../../../assets/landing.webp"
import SearchBar from '../SearchBar'

export default function Hero() {
  return (
    <div className='w-full relative h-80'>
         <img 
            src={bg}
            className="w-full h-full"
           />

           <div className='w-full absolute top-0 h-full flex justify-center items-center'>
              <SearchBar />
           </div>

    </div>
  )
}
