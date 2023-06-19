import React from 'react'
import { useState } from 'react'
import {AiOutlineHeart,AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { CartState } from '../../../../recoil/globalState'

export default function Hotel({hotel}) {
    const [hover,setHover]=useState(false)
    

    const [cart,setCart] =useRecoilState(CartState)

    const addToCart=()=>{
       const carts=[...cart]
       carts.push(hotel)
       setCart(carts)
      
     }
  
  return (
    <div className='flex flex-col ' onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
           <Link  to={`/booking/${hotel.id}`}
                state={{
                  hotel
                }}
                >
           
            <div className='relative'>
            <img 
                src={hotel?.img}
                className="h-56 rounded-lg "
                />
        
           <div className='absolute top-0 z-10 h-full w-full flex justify-end py-2 px-2'>
             <AiOutlineHeart
              className='text-2xl font-semibold text-slate-700 hover:text-white hover:text-4xl'/>
            </div>

        </div>
        </Link>
        <div className='flex flex-col space-y-1'>
            <h5 className='text-lg font-semibold text-slate-700'> {hotel?.name}</h5>
            <div className='flex items-center space-x-1'>
                {[1,2,3,4,5].map(()=>
                <AiFillStar  className="text-xl text-green-400"/>
                )}
            </div>
            <h5 className="text-slate-500 font-light ">{hotel?.location}</h5>
            <h5 className="text-black font-semibold">
                {hotel?.price}
                <span>night</span>
            </h5>
           

        </div>
        <div className='py-4 '>
            {hover && 
             <button className='bg-green-500   w-full  text-white py-1 rounded-md'
               onClick={addToCart}
              >Add to cart</button> }
          
        </div>

    </div>
  )
}
