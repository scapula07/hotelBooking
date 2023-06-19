import axios from "axios"


export const StripeAPI = {
    getStripeSecret: async function () {
      const url=`http://localhost:5000/api/v1/travel-next/get-secret`
      const config = {
        headers:{
           'Content-Type': 'application/json',
          },
           };
      
      try{
       const response= await axios.get(
          url,
          config
          )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },

     register: async function () {}
  }
  
//   const cancelApiObject = defineCancelApiObject( AuthAPI)
