import { useState, useEffect } from 'react';
import { Cardpost } from '../components/Cardpost'
import axios from 'axios';
function Homepage() {

  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8005/api/annonce/Posts')
      .then(async (response) => {
        const posts = response.data;
        const updatedPosts = [];
  
        // Use Promise.all to make requests for each item in the posts array
        await Promise.all(posts.map(async (post) => {
          const exchangeResponse = await axios.get(`http://localhost:8005/api/annonce/exchanger/${post.advertisedBy}`);
          const updatedPost = { ...post, userinfo: exchangeResponse.data[0] };
          updatedPosts.push(updatedPost);
        }));
  
   
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  const handleSearch = () => {
 if(searchQuery){
  axios.get(`http://localhost:8005/api/annonce/search/Posts${searchQuery ? `/${searchQuery}` : ''}`)
  .then(async (response) => {
    const posts = response.data;
    const updatedPosts = [];


    await Promise.all(posts.map(async (post) => {
      const exchangeResponse = await axios.get(`http://localhost:8005/api/annonce/exchanger/${post.advertisedBy}`);
      const updatedPost = { ...post, userinfo: exchangeResponse.data[0] };
      updatedPosts.push(updatedPost);
    }));


    setPosts(updatedPosts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

 } 

 axios.get('http://localhost:8005/api/annonce/Posts')
 .then(async (response) => {
   const posts = response.data;
   const updatedPosts = [];

   // Use Promise.all to make requests for each item in the posts array
   await Promise.all(posts.map(async (post) => {
     const exchangeResponse = await axios.get(`http://localhost:8005/api/annonce/exchanger/${post.advertisedBy}`);
     const updatedPost = { ...post, userinfo: exchangeResponse.data[0] };
     updatedPosts.push(updatedPost);
   }));


   setPosts(updatedPosts);
 })
 .catch((error) => {
   console.error('Error:', error);
 });

   
  };

  return (
<section className="py-10">

  <div className="flex flex-col justify-center items-center gap-2">
  <div className="flex ">
          <div className="relative md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>

    
       {
 posts.map((e,i )=> (
<Cardpost key={i} prop={e}  />
 ))
       }

 
</div>
</section>
  )
}

export default Homepage