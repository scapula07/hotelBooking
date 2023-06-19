import React from 'react'
import {RiCalendarEventFill} from "react-icons/ri"

export default function CheckDate({text}) {
  return (
    <div className='flex flex-col space-y-3 w-full'>
        <h5 className='text-slate-600 font-semibold text-sm'>{text}</h5>
        <div className='flex bg-slate-100 rounded-lg py-2 w-full space-x-4 px-2'>
            <input 
              placeholder='DD/MM/YY'
              className='bg-slate-100 w-10/12 text-xs'
            />
            <RiCalendarEventFill 
            className='font-semibold text-slate-700 text-xl '
            />

         </div>


    </div>
  )
}
