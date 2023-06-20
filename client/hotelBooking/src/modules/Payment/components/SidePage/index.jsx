import React,{useState} from 'react'
import paystack from "../../../../assets/paystack.png"
import paypal from "../../../../assets/paypal.webp"
import stripe from "../../../../assets/stripe.png"
import visa from "../../../../assets/visa.jpeg"

export default function SidePage({method,selectMethod}) {
  const [active,setActive]=useState("Paystack")
  return (
    <div className='flex flex-col space-y-8 w-full items-center'>
          <h5 className='text-lg font-semibold text-slate-500'>Payment Methods</h5>
        <div className='flex flex-col space-y-4 w-full items-center overflow-y-scroll'>
        
        {[{
          name:"Paystack",
          img:paystack
        },
        {name:"Paypal",
        img:paypal

        },
        {name:"Stripe",
        img:stripe

        },
        {name:"Visa",
        img:visa

        },
      ].map((pay)=>{
            return(
                <div className= {`${method==pay.name?'border border-green-500 w-44 h-24 shadow shadow-blue-200 rounded-md flex justify-center items-center px-2' :'w-44 h-24 shadow shadow-blue-200 rounded-md flex justify-center items-center hover:border-green-500 hover:border px-2'}`}onClick={()=>selectMethod(pay.name)}>
                    {/* <h5 className='font-semibold text-xl '>{text}</h5> */}
                    <img 
                    src={pay?.img}
                    className="w-full h-full"
                    />

                </div>
            )
        })}

        </div>
    </div>
  )
}
