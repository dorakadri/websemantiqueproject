
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
    id: "Recposts",
    title: "Posts claims",
    link: "./recposts",
    icon: <CgFeed />,
  },
   {
    id: "Recexchanges",
    title: "Exchanges claims",
    link: "./recexchanges",
    icon: <CgFeed />,
  },
  {
    id: "Responses",
    title: "Responses",
    link: "./reponses",
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

  },
  {
 
    id: "Charity events",
    title: "Charity events",
    link: "./Charity",
 icon:<AiFillBehanceCircle/>,

  },
  {
    id: "Forums",
    title: "Forums",
    link: "./forums",
    icon: <CgFeed />,
  },
  {
    id: "Owners",
    title: "Owners",
    link: "./Owners",
 icon:<AiOutlineSchedule/>,
  }

];



  