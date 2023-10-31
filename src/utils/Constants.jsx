
import {RxDashboard} from 'react-icons/rx'
import {FiBarChart} from 'react-icons/fi'
import  {MdPublish} from 'react-icons/md'
import {CgFeed} from 'react-icons/cg'
import {AiOutlineSchedule} from 'react-icons/ai'
export const navLinks = [



    {
      id: "Feed",
      title: "Feed",
      link: "./home",
     icon: <RxDashboard/> ,

    },
    {
      id: "Analytics",
      title: "Analytics",
      link: "./Analytics",
    icon:<FiBarChart/>,
  
    },
    {
      id: "Publish",
      title: "Publish",
      link: "./Publish",
     icon:<MdPublish/>,
  
    },
    {
      id: "Posts",
      title: "Posts",
      link: "./Posts",
    icon:<CgFeed/>,

    },
    {
      id: "Association",
      title: "Association",
      link: "./Association",
   icon:<AiOutlineSchedule/>,
   
    },
    {
      id: "Owners",
      title: "Owners",
      link: "./Owners",
   icon:<AiOutlineSchedule/>,
    }
  ];



  