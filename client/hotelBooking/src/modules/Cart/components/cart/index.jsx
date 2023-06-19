import React from 'react'
import {MdDeleteOutline} from "react-icons/md"

export default function Cart({cart}) {
  return (
    <div className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between'>
            <div className='flex items-center space-x-6 '>
                <img 
                  src={cart?.img}
                  className="w-56 h-36 rounded-sm"
                />
                <div className='flex flex-col'>
                    <h5 className='text-xl'>{cart?.name}</h5>
                    <h5 className='text-black font-light text-sm'>Travelnext</h5>
                  </div>

            </div>
             <div className=''>
                <h5 className='text-lg font-semibold '>{cart?.price}</h5>
                
            </div>

        </div>
        <div className='flex justify-between w-full'>
            <h5 className='flex items-center space-x-4'>
               <MdDeleteOutline className='text-xl text-green-500 font-semibold'/>
               <span className='text-lg font-light text-green-500'>Remove</span>
            </h5>
            


        </div>
        
  </div>
  )
}
