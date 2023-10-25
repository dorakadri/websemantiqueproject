import React from 'react'
import { Eventcards } from '../components/Eventcards'

function Eventpage() {
  

    const events = [
        {
            title: 'Vintage & Collectibles Exchange',
            description: 'Targeted at collectors and antique enthusiasts.',
            creator: 'John Doe',
            date: 'October 30, 2023',
            participants: 5,

        },
        {
            title: 'Furniture Swap Fest',
            description: 'An event for those interested in exchanging furniture and home decor items.',
            creator: 'Jane Smith',
            date: 'November 15, 2023',
            participants: 8,

        },
        {
            title: 'Eco-Friendly Fashion ',
            description: 'Promoting sustainable fashion by trading clothing, shoes, and accessories.',
            creator: 'Bob Johnson',
            date: 'November 25, 2023',
            participants: 3,

            
        },
        
    ];
    return (
        <section className="py-10 bg-gray-100">

            <div className="  px-4 flex items-center justify-end md:items-center lg:justify-end ">
                <button className="text-sm  space-x-1.5 rounded-lg bg-blue-500  px-4 py-1.5 text-white duration-100 hover:bg-blue-600">Create new event</button>
            </div>

            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {events.map((event, index) => (
                    <Eventcards key={index}
                        title={event.title}
                        description={event.description}
                        creator={event.creator}
                        date={event.date} 
                        participants={event.participants} />
                ))}
            </div>
        </section>
    )
}

export default Eventpage