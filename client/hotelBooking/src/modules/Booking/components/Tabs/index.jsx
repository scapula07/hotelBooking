import React from 'react'
import { tabs } from './tabs'

const Tab=({tab})=>{
   return(
    <div className='flex items-center space-x-4 border rounded-lg px-6 py-2 hover:bg-black hover:text-white'>
       <h5 className='font-semibold text-black hover:text-white'>{tab?.name}</h5>
       <h5 className='font-semibold text-black hover:text-white '>{tab?.icon}</h5>
    </div>
   )
}

export default function Tabs() {
  return (
        <div className='flex w-full items-center space-x-4 py-6'>
         
           {tabs.map((tab)=>{
            console.log(tab)
              return(
                <Tab 
                 tab={tab}
                />
                )
            })

            }

          </div>
  )
}
