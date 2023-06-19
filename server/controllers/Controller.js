const catchAsync = require('../utils/catchAsync');
const { spawn ,spawnSync} = require("child_process");
const fs = require('fs')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');




exports.getClientSecret= async (req, res, next) => {


    try{
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      });
      
      const clientSecret = paymentIntent.client_secret;
        res.status(200).json({
            status: 'success',
            client_secret: clientSecret

          });
    }catch(e){
        console.log(e)
    }
    
    


} 

