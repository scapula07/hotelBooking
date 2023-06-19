import React from 'react'

export default function SidePage({method,selectMethod}) {
  return (
    <div className='flex flex-col space-y-8 w-full items-center'>
          <h5 className='text-lg font-semibold text-slate-500'>Payment Methods</h5>
        <div className='flex flex-col space-y-8 w-full items-center overflow-y-scroll'>
        
        {["Paystack","Stripe","Paypal","Visa"].map((text)=>{
            return(
                <div className='w-44 h-24 shadow shadow-blue-200 rounded-md flex justify-center items-center' onClick={()=>selectMethod(text)}>
                    <h5 className='font-semibold text-xl '>{text}</h5>

                </div>
            )
        })}

        </div>
    </div>
  )
}
