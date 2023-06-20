import React ,{useState} from 'react'
import { PaystackButton } from 'react-paystack'
import successImg from "../../../assets/success.png"
import "./view.css"




export default function Paystack({name,}) {

     const [email,setEmail]=useState()
     const [success,setSuccess]=useState(false)

    const componentProps = {
        email,
        amount:"10000",
        publicKey:"pk_test_ba1119bf72f03fb9c3a8fc10bc10fe317da24321",
        text: "Pay Now",
        onSuccess: () =>
        setSuccess(true),
        onClose: () => alert() ,
      }

  return (
    <>

    {success?
       
      <div  className='flex flex-col items-center justify-center space-y-6 w-full'>
            <img src={successImg}
              className="w-56"
            />
            <h5 className='text-lg font-semibold text-green-600'>Transaction successful</h5>
        </div>
           :
          <div className='flex flex-col items-center w-5/6 space-y-8'>

          <div className='flex flex-col w-full bg-slate-100 space-y-8 py-7 px-6 h-44 rounded-lg'>
              <input  
                className='bg-white w-full rounded-lg py-2 px-6'
                placeholder='Enter your email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <div className='flex items-center space-x-6 '>
                <input  
                className='bg-white w-full rounded-lg py-2 px-6'
                placeholder='Phone number'
              />
              <input  
                 className='bg-white w-full rounded-lg py-2 px-6'
                 placeholder='Total amount'
               />
              </div>
  
          </div>
         <button className='bg-green-500 text-white w-full rounded-lg py-2'>
           <PaystackButton {...componentProps}/>
         </button>
        
  
      </div>

    }

    </>
  )
}
