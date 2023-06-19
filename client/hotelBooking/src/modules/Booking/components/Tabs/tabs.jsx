import {RiHotelLine} from "react-icons/ri"
import {GiDetour} from "react-icons/gi"
import {BsFillHousesFill,BsThreeDots} from "react-icons/bs"
import {GiForkKnifeSpoon} from "react-icons/gi"
import {TbMessages} from "react-icons/tb"
 
export const tabs=[
    {
      icon:<RiHotelLine />,
      name:"Rooms",
      link:"/hotels"
     },
     {
        icon:<GiDetour />,
        name:"Bathroom",
        link:"/things-to-do"
     },
     {
        icon:<BsFillHousesFill/>,
        name:"Kitchen",
        link:"/rentals"
      },
      {
        icon:<BsFillHousesFill/>,
        name:"Facilities",
        link:"/rentals"
      },
       {
        icon:<BsThreeDots/>,
        name:"More",
        link:"/cart"
      }
  ]

