import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../../Firebase'


export const HotelAPI = {
  
    getAllHotels: async function () {
         
        const q = query(collection(db, "houses"));
        const houses = []
          try{
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) => {
                houses.push({ ...doc.data(), id: doc.id })
              
            })
            return houses

            }catch(e){
            console.log(e)
            }
    
         },

     
  }

