import React,{useState} from 'react'
import {RiCalendarEventFill} from "react-icons/ri"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function CheckDate({text}) {
    const [startDate, setStartDate] = useState(new Date());
    const [pickDate, setPick] = useState(false);
  return (
    <div className='flex flex-col space-y-3 w-full'>
        <h5 className='text-slate-600 font-semibold text-sm'>{text}</h5>
        {!pickDate?
          
        <div className='flex bg-slate-100 rounded-lg py-2 w-full space-x-4 px-2'>
            <input 
              placeholder='DD/MM/YY'
              className='bg-slate-100 w-10/12 text-xs'
              value={startDate}
            />
            <RiCalendarEventFill 
            className='font-semibold text-slate-700 text-xl '
            onClick={()=>setPick(true)}
            />

         </div>
          :
     
              <DatePicker
               selected={startDate} 
               onChange={(date) => setStartDate(date)} 
               onSelect={()=>setPick(false)}
               />


          }

    </div>
  )
}
