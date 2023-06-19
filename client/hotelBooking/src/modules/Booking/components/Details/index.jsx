
import React from 'react'
import {MdLocationPin} from "react-icons/md"

const Ratings=()=>{
    return(
    <div className='flex items-center w-full py-5 space-x-5'>
       <h5 className='text-green-500 text-sm font-semibold'>5.0</h5>
        <h5 className='text-green-500 text-sm font-semibold'>Perfect</h5>
        {["Hotel","New Building","Top value"].map((text)=>{
            return(
             <button className='text-xs bg-purple-200 text-purple-600 font-semibold px-6 rounded-full py-2'>{text}</button>
            )
        })}

      </div>
    )
  }
export default function Details({hotel}) {
  return (
    <div className='flex w-full flex-col'>
        <img 
          src={hotel?.img}
          className="w-11/12 h-72 rounded-lg hover:w-full hover:h-80"
          />
        <Ratings />
        <div className='flex flex-col'>
            <h5 className='text-slate-600 text-sm font-semibold flex items-center space-x-2'>
                <span> {hotel?.location}</span>
                <MdLocationPin className='text-xl font-semibold text-red-500' />
             </h5>
             
             <div className='flex flex-col py-8'>
                <div className='flex items-center space-x-8'>
                {["Description","Features","Virtual","Price & Task history"].map((text)=>{
                     return(
                      <h5 className='text-sm hover:text-blue-600 font-semibold '>{text}</h5>
                    )
                    })}
                  </div>
                  <div className='text-slate-600 font-light py-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </div>
                
             </div>
            
         </div>

    </div>
  )
}
