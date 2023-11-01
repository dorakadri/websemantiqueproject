import React, { useEffect, useState } from 'react';
import { Forumpost } from '../components/Forumpost'
import axios from 'axios';
function Forums() {
  const [forums, setForums] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8005/api/troc/forum')
      .then((response) => {
       console.log(response.data);
       setForums(response.data);
      })
      .catch((error) => {

        console.error('Error:', error);
      });
  }, []);



    return (
     
<section className="py-10">
 
<div className='max-w-lg mx-auto my-10 p-5' >

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
