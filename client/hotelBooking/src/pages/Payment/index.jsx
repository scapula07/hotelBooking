import React,{useState} from 'react'
import Layout from '../../layout/main'
import PaymentView from '../../modules/Payment/views'
import {loadStripe} from '@stripe/stripe-js';
import { StripeAPI } from '../../modules/Payment/_api/stripe';
import { useEffect } from 'react';


const stripePromise = loadStripe('pk_test_51NK0FWKFo2pVX7TJVaC4fyFgnqajNy6zv7n73DENOmHOTooxMd1fwrycclXheGI2EMrqc2AbTO2NnuVIkajrcB4r00uBVAaEwX');


export default function Payment() {
  const [secret,setSecret] =useState()
  useEffect(()=>{
const getSecret=async()=>{
      const res =await StripeAPI.getStripeSecret()
      console.log(res?.data?.client_secret)
      setSecret(res?.data?.client_secret)
    }
    getSecret()
  })
  const options = {
    // passing the client secret obtained from the server
    clientSecret:secret
  };
  return (
    <div className=''>
      <Layout >
       <PaymentView 
         options={ options}
         stripePromise={stripePromise}
       />
      </Layout>
        
    </div>
  )
}
