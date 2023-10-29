import React, { useEffect, useState } from 'react';
import { Forumpost } from '../components/Forumpost'
import axios from 'axios';
function Forums() {
  const [forums, setForums] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8005/SpringMVC/troc/forum')
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
