import React, { useState } from 'react';
import { Forumpost } from '../components/Forumpost'
function Forums() {
    const [openRight, setOpenRight] = useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
     
  <div >


<Forumpost/>


 
</div>

  
    );
}

export default Forums;
