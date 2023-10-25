import React from 'react'

  export function Forumpost() {
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
          <div className="flex w-full mt-1">
            <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
              UX Design
            </div>
            <div className="text-gray-400 font-thin text-xs">• 1 day ago</div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
        <img className="rounded w-full" src="https://picsum.photos/536/354" />
      </div>
      <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">
        Dummy text of the printing and typesetting industry
      </div>
      <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
      </div>
    
      <div className="flex w-full border-t border-gray-100">
        <div className="mt-3 mx-5 flex flex-row text-xs">
          <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
            Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div>
          </div>
          <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
            Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
          </div>
        </div>
        <div className="mt-3 mx-5 w-full flex justify-end text-xs">
          <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">
            Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div>
          </div>
        </div>
      </div>
      <div className="relative  flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
        <img
          className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
          alt="User avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-6">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
          >
            <svg
              className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
          style={{ borderRadius: '25px' }}
          placeholder="Post a comment..."
          autoComplete="off"
        />
      </div>
    </div>
    
    );
  }