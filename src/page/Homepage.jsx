import React from 'react'
import { Cardpost } from '../components/Cardpost'

function Homepage() {
  return (
<section className="py-10">

  <div className="flex flex-col justify-center items-center gap-2">

       {
 [1,2,3,4].map(e => (
<Cardpost key={e}/>
 ))
       }

 
</div>
</section>
  )
}

export default Homepage