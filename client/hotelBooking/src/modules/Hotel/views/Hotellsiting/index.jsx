import React from 'react'
import { HotelAPI } from '../../_api'
import { useQuery} from 'react-query'
import { SyncLoader } from 'react-spinners'
import Hotel from '../../components/Hotel'
import { HotelState } from '../../../../recoil/globalState'
import { useRecoilState } from 'recoil'

export default function HotelListing({data,isLoading,isError,error,result}) {
  console.log(result,"rees")
  return (
      <div className='w-full  py-10'>
        <div className='grid grid-flow-row grid-cols-4  gap-4 gap-y-8 h-full w-full'>
        {result.length ===0?
                   <>
            {data?.map((hotel)=>{
                
                return(
                <Hotel 
                    hotel={hotel}
                />
                )
                })

                }
                  </>
                   :
                   <>
                {result.map((hotel)=>{
                    return(
                    <Hotel hotel={hotel?.item} />
                    )
                     })
                    }
                   </>

                }

        </div>
        {isLoading&&(
            <div className='flex items-center justify-center h-96 w-full'>
                <SyncLoader color="grey"/>
            </div>

            )}

            {isError&&(
            <div className='flex items-center justify-center h-96  w-full'>
                <h5 className='font-semibold text-red-500 text-lg'>{error?.message}</h5>
            </div>
            )

            }
    </div>
   )
}
