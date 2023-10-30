import { useState, useEffect } from 'react';
import { Cardpost } from '../components/Cardpost'
import axios from 'axios';
function Homepage() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8005/SpringMVC/annonce/Posts')
      .then(async (response) => {
        const posts = response.data;
        const updatedPosts = [];
  
        // Use Promise.all to make requests for each item in the posts array
        await Promise.all(posts.map(async (post) => {
          const exchangeResponse = await axios.get(`http://localhost:8005/SpringMVC/annonce/exchanger/${post.advertisedBy}`);
          const updatedPost = { ...post, userinfo: exchangeResponse.data[0] };
          updatedPosts.push(updatedPost);
        }));
  
   
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  return (
<section className="py-10">

  <div className="flex flex-col justify-center items-center gap-2">

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