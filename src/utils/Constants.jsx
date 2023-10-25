
import {RxDashboard} from 'react-icons/rx'
import {FiBarChart} from 'react-icons/fi'
import  {MdPublish} from 'react-icons/md'
import {CgFeed} from 'react-icons/cg'
import {AiOutlineSchedule,AiFillBehanceCircle} from 'react-icons/ai'

export const navLinks = [
  {
    id: "Feed",
    title: "Feed",
    link: "./home",
    icon: <RxDashboard />,
  },
 
  {
    id: "Reclamations",
    title: "Reclamations",
    link: "./reclamations",
    icon: <CgFeed />,
  },

  {
    id: "Association",
    title: "Association",
    link: "./Association",
    icon: <AiOutlineSchedule />,
  },
  {
    id: "Events",
    title: "Events",
    link: "./Events",
 icon:<AiOutlineSchedule/>,
    
  },
  {
 
    id: "Donations",
    title: "Donations",
    link: "./Donations",
 icon:<AiFillBehanceCircle/>,

  }

];



  