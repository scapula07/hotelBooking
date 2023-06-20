import React,{useState} from 'react'
import SidePage from "../components/SidePage"
import Stripe from './stripe'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Paystack from './paystack';
import Paypal from './paypal';




export default function PaymentView({options,stripePromise}) {
    const [method,selectMethod]=useState("Paystack")
  return (
    <Elements stripe={stripePromise} options={options} >
    <div className='flex w-full justify-center items-center h-screen'>
         <div className='w-5/6 shadow-lg shadow-slate-300 rounded-lg h-4/5 py-10 px-0 flex space-x-2'>
            <div className='w-2/4  flex justify-center'>
              <SidePage
               method={method}
               selectMethod={selectMethod}
              />
            </div>
             <div className='w-3/4 flex py-16 '>
                {method==="Stripe" && <Stripe options={options} />}
                {method==="Paystack" && <Paystack options={options} />}
                {method==="Paypal" && <Paypal  />}
             </div>

         </div>

    </div>
    </Elements>
  )
}
