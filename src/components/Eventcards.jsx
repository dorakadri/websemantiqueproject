import React, { useState } from 'react'
 export function Eventcards({ title, description, creator, date, location }) {
    
    const gradientBackground = {

       background: 'linear-gradient(326deg, rgba(255,236,226,1) 0%, rgba(252,232,250,1) 100%, rgba(90,34,195,1) 100%)',
      };
   
    return (



        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[400px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]  undefined" style={gradientBackground}  >
            <div className="h-full w-full flex  justify-between flex-col">
                <div className="flex  justify-between flex-col">
                    <div className="relative w-full">
                         <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer" >
                            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 mt-2 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-navy-700">{title}</p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2 text-red">{date}</p>

                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">Created by {creator}</p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{description}</p>



                        </div>
                    </div>
                </div>

                    
                    <div>
                    <p className=" px-1 mb-5 text-sm font-medium text-gray-800  ">Location:  {location}</p>

                        <button className="mb-2 text-sm w-100 space-x-1.5 rounded-lg bg-blue-500 w-full px-4 py-1.5 text-white duration-100 hover:bg-blue-600">Participate</button>
                    </div>
 
            </div>
        </div>
    )
}

