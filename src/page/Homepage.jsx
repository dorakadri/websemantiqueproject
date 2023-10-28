import { useState, useEffect } from 'react';
import { Cardpost } from '../components/Cardpost'
import axios from 'axios';
function Homepage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8005/SpringMVC/annonce/Posts')
      .then((response) => {
       console.log(response.data);
        setPosts(response.data);
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