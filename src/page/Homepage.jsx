import React from 'react'
import { Cardpost } from '../components/Cardpost'

function Homepage() {
  return (
<section className="py-10 bg-gray-100">

  <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <Cardpost/>

 
</div>
</section>
  )
}

export default Homepage