import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
  export function Forumpost({data}) {
    return (
<div className="bg-white shadow rounded-lg">
      <div className="flex flex-row px-2 py-3 mx-3">
        <div className="w-auto h-auto rounded-full border-2 border-green-500">
          <img
            className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
            alt="User avatar"
            src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
          />
        </div>
        <div className="flex flex-col mb-2 ml-4 mt-1">
          <div className="text-gray-600 text-sm font-semibold">Sara Lauren</div>
         
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
        <img className="rounded w-full" src={data.postimage}/>
      </div>
      <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">
                          {data.title}
      </div>
      <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
                          {data.PostDescription}
      </div>
    
      <div className="flex w-full border-t border-gray-100">
        <div className="mt-3 mx-5 flex flex-row text-xs">
          <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
            Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div>
          </div>
         
        </div>
     
      </div>
      <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
        <img
          className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
          alt="User avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        /> <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">
        {data.hasCommentContent}
        </div>
        
       
        
      </div>
    </div>
    
    );
  }