import React, { useState } from 'react';
import { Forumpost } from '../components/Forumpost'
function Forums() {
    const [openRight, setOpenRight] = useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
     
  <div  className='flex flex-col justify-center items-center gap-2'>


<Forumpost/>


 
</div>

  
    );
}

export default Forums;
