import { Button, Drawer, IconButton, Typography } from '@material-tailwind/react';
import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function PostDetails() {
    const [posts, setPosts] = useState({});
    const [owner, setowner] = useState({});
    const [taker, settaker] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response1 = await axios.get('http://localhost:8005/SpringMVC/annonce/Posts/' + id);
            const initialData = response1.data;
      
            if (Array.isArray(initialData) && initialData.length > 0) {
              const post = initialData[0];
              setPosts(post);
       console.log(post.advertisedBy)
              if (post.advertisedBy) {
         
                const response2 = await axios.get('http://localhost:8005/SpringMVC/annonce/exchanger/' + post.advertisedBy);
                const secondData = response2.data;
            
                setowner(...secondData);
           
              }
      
              if (post.exchanger) {
                const response3 = await axios.get('http://localhost:8005/SpringMVC/annonce/exchanger/' + post.exchanger);
                console.log('http://localhost:8005/SpringMVC/annonce/exchanger/' + post.exchanger)
                const thirdData = response3.data;
                settaker(...thirdData);
              }
      
   
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        fetchData();
      }, []);
console.log(posts)
console.log(owner)
console.log(taker)
    const [openRight, setOpenRight] = React.useState(false);
    const isTaken = posts.taken && posts?.taken?.startsWith('true');
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
  return (
    <div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
        <div>
            <h2 className="text-2xl font-semibold leading-tight">Post Detail</h2>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0">
           
                <div className="relative">
                    <select
                        className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                        <option>All</option>
                        <option>taken</option>
                        <option>not taken</option>
                    </select>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                        <path
                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                        </path>
                    </svg>
                </span>
                <input placeholder="Search"
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
            </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                owner
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               exchanger
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               item /service to exchange
                            </th>
                         
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Created at
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                see detail
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10">
                                        <img className="w-full h-full rounded-full"
                                            src= {  owner.profileimage}
                                            alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                      {  owner.lastname}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10">
                                        <img className="w-full h-full rounded-full"
                                            src={   taker.profileimage}
                                            alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        {  taker.lastname}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className=" w-20 h-20 flex justify-center items-center ">
                                    <img className="w-full h-full "
                                            src={posts.exchangeimage}
                                            alt="" />
                                    </div>
                            </td>
                     
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                {posts.date}
                                </p>
                            </td>
                     
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span className="relative">{isTaken ? 'taken' : 'nottaken'}</span>
                                </span>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <Button onClick={openDrawerRight}>see more</Button>
                            </td>
                        </tr>
            
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className=" flex items-center justify-between ">
          <Typography variant="h5" color="blue-gray">
            User infomation 
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="bg-white text-center rounded-md ">

  <img className={"w-20 h-20 object-cover rounded-full mx-auto shadow-lg"} src={taker.profileimage} alt="User avatar"/>
  <p className="capitalize text-xl mt-1">{taker.lastname}</p>
  
  
</div>
<div className=" rounded-md  cursor-pointer">
<Typography variant="h5" color="blue-gray">
            item/service information 
          </Typography>
      <div>
        <img src={posts.exchangeimage} alt="" />
      </div>
      <div className="px-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-600">{posts.exchangedescription}</h3>
        <Button  className='w-full mt-2 '>Accept</Button>
        <Button  className='w-full mt-2'>decline</Button>
      </div>
    </div>
      </Drawer>
</div>


  )
}

export default PostDetails