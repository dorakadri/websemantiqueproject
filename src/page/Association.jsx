import React from 'react'
import { AssociationCards } from '../components/AssociationCards'

function Association() {
  return (
    
<div>


    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
  

   {[1,2,3,4,5].map((e)=>(
    <AssociationCards key={e}/>
   ))}


      
  
    </div>
    </div>

  )
}

export default Association