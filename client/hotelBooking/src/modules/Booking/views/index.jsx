import React ,{useState} from 'react'
import Tabs from '../components/Tabs'
import Book from '../components/Book';
import Details from '../components/Details';

import { useLocation,useParams} from "react-router-dom";




export default function BookingView() {
    const location =useLocation()
    const [tab,setTab] =useState("Rooms")
    const hotel=location.state.hotel
  return (
    <div className='w-full'>
        <div className='py-7'>
          <h5 className='text-5xl font-semibold text-black flex items-center space-x-4'>
            <span className='text-red-500'>Explore</span>
            <span >
              {hotel?.name} Hotel
            </span>
          
          </h5>

         </div>
        <Tabs />

        <div className='flex w-full py-8 space-x-10'>
             <div className='w-4/6'>
                <Details 
                  hotel={hotel}
                 />
              </div>
              <div className='w-1/3'>
                <Book 
                   hotel={hotel}
                 />
             </div>


        </div>

    </div>
  )
}

