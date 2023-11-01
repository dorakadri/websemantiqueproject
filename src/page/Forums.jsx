import React, { useEffect, useState } from 'react';
import { Forumpost } from '../components/Forumpost'
import axios from 'axios';
function Forums() {
  const [forums, setForums] = useState([]);
  const [searchTitle, setsearchTitle] = useState('');
  
  useEffect(() => {

   let  apiUrl="http://localhost:8005/api/troc/forum"
    if (searchTitle) {
      apiUrl = `http://localhost:8005/api/troc/forumsearch?title=${searchTitle}`;

  }
    axios.get(apiUrl)
      .then((response) => {
       console.log(response.data);
       setForums(response.data);
      })
      .catch((error) => {

        console.error('Error:', error);
      });

   
  }, [searchTitle]);


    return (
     
<section className="max-w-lg mx-auto my-10 p-5">
<div className=" mx-5 px-4 flex items-center justify-end md:items-center lg:justify-end ">
                    <input type="text" id="search-navbar"
                        className="block  p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={(e) => setsearchTitle(e.target.value)} />


                </div>
<div >

     {
forums.map((e,i )=> (
<Forumpost key={i} data={e}  />
))
     }

</div>
</section>

  
    );
}

export default Forums;

