import React from 'react'

export default function ErrorPage() {
  return (
    <div className='flex flex-col h-screen items-center space-y-6 justify-center'>
         
         <h5 className='text-green-500 text-4xl font-bold'>Something went wrong</h5>
         <button className='bg-green-500  text-white rounded-lg py-2 px-5'
           onClick={() => history.go(-1)}
         >
            Go to previous page
         </button>

    </div>
  )
}
