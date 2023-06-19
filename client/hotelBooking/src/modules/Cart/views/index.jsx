import React from 'react'
import Cart from '../components/cart'
import Checkout from '../components/Checkout'
import { CartState } from '../../../recoil/globalState'
import { useRecoilValue } from 'recoil'



export default function CartView() {
    const carts =useRecoilValue(CartState)

  return (
    <div className='flex w-full justify-center py-8'>
        <div className='flex w-full space-x-7'>
            <div className='w-4/5 bg-white shadow-lg px-4 py-4'>
                <h5 className='text-lg font-semibold'>Cart({carts.length})</h5>
                <div className='flex flex-col space-y-6 overflow-y-scroll py-4'>
                    {carts.map((cart)=>{
                        return(
                        <Cart 
                            cart={cart}
                        />
                        )
                    })
                    }

                </div>
               

            </div>
            <div className='w-1/4'>
               <Checkout />
                
            </div>

        </div>

    </div>
  )
}
