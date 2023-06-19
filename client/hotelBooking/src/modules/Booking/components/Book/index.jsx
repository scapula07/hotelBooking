import React ,{useState,useEffect} from 'react'
import Checkout from './checkout'
import { useRecoilState } from 'recoil'
import { CartState } from '../../../../recoil/globalState'


export default function Book({hotel}) {
  const [added,setAdded]=useState()
  const [cart,setCart] =useRecoilState(CartState)

  const addToCart=()=>{
     const carts=[...cart]
     carts.push(hotel)
     setCart(carts)
     setAdded(true)
    
   }
  console.log(cart,"cart")
  console.log(hotel,"jhhh")
  console.log(added,"aaa")
  return (
    <>
      {added?
       <Checkout hotel={hotel}/>
         :
      <div className='w-full flex flex-col py-8  w-full border rounded-xl px-8 space-y-8'>
          <div className='flex w-full items-center justify-between'>
            <h5 className='text-black font-semibold text-lg'>
              {hotel?.price}/<span className='text-slate-500 font-light'>night</span>
              </h5>
              <button className='text-xs bg-pink-400 rounded-full py-2 px-4 font-semibold text-white'
               
              >20% off</button>

           </div>
           <div className='w-full'>
              <button 
               className='w-full bg-green-500 py-2 rounded-lg text-white font-semibold'
               onClick={addToCart}
              >Add to cart </button>

           </div>
      </div>

      } 
    </>
  )
}
