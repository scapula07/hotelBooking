import React,{useState} from 'react'
import CheckDate from '../CheckDate'
import { Link } from 'react-router-dom'



const Info=()=>{
    return(
        <div className='flex flex-col w-full space-y-4'>
            <div className='flex items-center w-full justify-between space-x-4 py-6'>
                    {["Check-in","Check-Out"].map((text)=>{
                        return(
                        <CheckDate 
                        text={text}
                        />
                        )
                    })
                    }
                
              </div>
              <div className='w-full flex flex-col space-y-3 rounded-lg py-2'>
                <h5>Room types</h5>
                <select className='font-semibold bg-slate-100 py-4 px-4 text-slate-600 rounded-lg'>
                    <option>Single </option>
                    <option>Double </option>
                    <option>Triple</option>
                </select>

              </div>

              <div className='w-full flex flex-col space-y-3 rounded-lg py-2'>
                <h5>Guests</h5>
                <select className='font-semibold bg-slate-100 py-4 px-4 text-slate-600 rounded-lg'>
                    <option>2 Adults,1 children</option>
                </select>

              </div>

        </div>
    )
}
export default function Checkout({hotel}) {
  return (
<div className='w-full flex flex-col py-8  w-full border rounded-xl px-8 space-y-4'>
    <div className='flex w-full items-center justify-between'>
      <h5 className='text-black font-semibold text-lg'>
        {hotel?.price}/<span className='text-slate-500 font-light'>night</span>
        </h5>
        <button className='text-xs bg-pink-400 rounded-full py-2 px-4 font-semibold text-white'>20% off</button>
     
     </div>
     <h5 className='border w-full'></h5>
     <Info />
     <div className='w-full py-6'>
        <div className='flex items-center justify-between py-2'>
            <h5 className='text-sm font-semibold'>Total payment</h5>
            <h5 className='text-sm font-semibold'> {hotel?.price}</h5>

        </div>
        <Link to="/payment">
        <button 
         className='w-full bg-blue-600 py-2 rounded-lg text-white font-semibold'
         onClick={()=>setAdded(true)}
        >Book now 
        
        </button>
        </Link>

     </div>
</div>
  )
}
