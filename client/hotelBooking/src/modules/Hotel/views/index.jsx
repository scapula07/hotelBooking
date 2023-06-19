import React,{useState} from 'react'
import TopSearch from '../components/TopSearch'
import HotelListing from './Hotellsiting'
import { useQuery} from 'react-query'
import { HotelAPI } from '../_api'
import Fuse from "fuse.js"


export default function HotelView() {
    const [searchQuery,setQuery]=useState("")
    const [hotel,setHotels]=useState([])
 
   
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData
      } = useQuery(['hotels'], () => HotelAPI.getAllHotels(), { keepPreviousData: true });
      const fuse =new Fuse([data],{
        keys:["name","location"]
      })
      const result=fuse.search(searchQuery)
      console.log(data)

  return (
    <div className='w-full'>
        <TopSearch 
         searchQuery={searchQuery}
         setQuery={setQuery}
        />
        <HotelListing
         data={data}
         isLoading={isLoading}
         isError={isError}
         error={ error}
         result={result}
         />
     </div>
  )
}
