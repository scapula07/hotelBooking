import {RiHotelLine} from "react-icons/ri"
import {GiDetour} from "react-icons/gi"
import {BsFillHousesFill,BsThreeDots} from "react-icons/bs"
import {GiForkKnifeSpoon} from "react-icons/gi"
import {TbMessages} from "react-icons/tb"
 
export const tabs=[
    {
      icon:<RiHotelLine />,
      name:"Hotels",
      link:"/hotels"
     },
     {
        icon:<GiDetour />,
        name:"Things to do",
        link:"/things-to-do"
     },
     {
        icon:<BsFillHousesFill/>,
        name:"Vacation Rental",
        link:"/rentals"
      },
      {
        icon:<GiForkKnifeSpoon/>,
        name:"Restaurants",
        link:"/restaurants"
       },
       {
         icon:<TbMessages />,
         name:"Travel Stories",
         link:"/cart"
       },
       {
        icon:<BsThreeDots/>,
        name:"More",
        link:"/cart"
      }
  ]

