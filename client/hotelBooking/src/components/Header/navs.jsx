import {BiPencil} from "react-icons/bi"
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineLock} from "react-icons/md"
import {FaQuestion} from "react-icons/fa"


export const navs=[
    {
      icon:<BiPencil />,
      navName:"Reviews",
      link:"/review"
     },
     {
        icon:<AiOutlineHeart />,
        navName:"Trips",
        link:"/trips"
     },
     {
        icon:<IoIosNotifications />,
        navName:"Alert",
        link:"/alerts"
      },
      {
        icon:<MdOutlineLock />,
        navName:"Sign in",
        link:"/signin"
       },
       {
        icon:<AiOutlineShoppingCart />,
        navName:"Cart",
        link:"/cart"
       },
       {
        icon:<FaQuestion />,
        navName:"FAQs",
        link:"/faq"
       }
  ]