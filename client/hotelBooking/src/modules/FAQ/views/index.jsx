import React from 'react'
import {MdAdd} from "react-icons/md"

const faqs=[
    {
      name:"Cancellation policy",
      description:" In this tab, you can outline the cancellation policy for bookings. Specify the timeframes for cancellations, any applicable fees or penalties, and any special conditions related to cancellations or modifications "
    },
    {
        name:"Policies and terms",
        description:" In this tab, you can outline the cancellation policy for bookings. Specify the timeframes for cancellations, any applicable fees or penalties, and any special conditions related to cancellations or modifications "
      },
    {
    name:"Payment and billing",
    description:" In this tab, you can outline the cancellation policy for bookings. Specify the timeframes for cancellations, any applicable fees or penalties, and any special conditions related to cancellations or modifications "
    },
    {
    name:"Technical support",
    description:" In this tab, you can outline the cancellation policy for bookings. Specify the timeframes for cancellations, any applicable fees or penalties, and any special conditions related to cancellations or modifications "
    }
]

export default function FAQView() {
  return (
    <div className='w-full py-20'>
        <div>
            <h5 className='text-4xl font-semibold text-right w-44'>FAQ's</h5>
            <h5 className='w-44 border border-red-300'></h5>
        </div>
        <div className='flex flex-col py-6 space-y-4'>
            {faqs.map((faq)=>{
                return(
                <div className='flex space-x-4'>
                    <MdAdd className='text-red-300 text-3xl ' />
                    <div className='flex flex-col space-y-4'>
                        <h5 className='text-xl font-semibold'>{faq.name}</h5>
                        <div className='px-6 text-sm font-light w-3/5'>
                          {faq?.description}
                       </div>

                  </div>


              </div>
                )
            })

            }
          

        </div>

    </div>
  )
}
