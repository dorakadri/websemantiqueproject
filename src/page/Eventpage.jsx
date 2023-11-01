import { Eventcards } from '../components/Eventcards'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
function Eventpage() {


    const [regularEvents, setRegularEvents] = useState([]);
    const [titleSearch, setTitleSearch] = useState('');
    const [eventLocations, setEventLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');


    // Fetch all event locations
    useEffect(() => {
        axios.get('http://localhost:8005/api/event/eventLocations')
            .then((response) => {
                setEventLocations(response.data);
            })
            .catch((error) => {
                console.error('Error fetching event locations:', error);
            });
    }, []);

    useEffect(() => {
        let apiUrl = 'http://localhost:8005/api/event/regularEvents';

        if (selectedLocation) {
            apiUrl = `http://localhost:8005/api/event/regularEventsSearchLocation?location=${selectedLocation}`;

        }

        if (titleSearch && selectedLocation || titleSearch) {
            apiUrl = `http://localhost:8005/api/event/regularEvents/search/filter?title=${titleSearch}&location=${selectedLocation}`;
        }

        axios.get(apiUrl)
            .then((response) => {
                setRegularEvents(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made, but the server responded with an error status
                    console.error('Server Error:', error.response.data);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('No response received');
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.error('Error:', error.message);
                }
            });
    }, [titleSearch, selectedLocation]);

    return (
        <section className="py-10 bg-gray-100">

            <div className=" flex items-center justify-end mb-5">



                <div >

                    <Menu>
                        <MenuHandler>
                            <div className="flex items-center  cursor-pointer  max-w-50" >

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Filter location
                                    </p>

                                </div>
                                <div >
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                        </MenuHandler>
                        <MenuList>

                            <MenuItem className="flex items-center gap-2"
                                onClick={() => setSelectedLocation('')} >

                                <Typography

                                    variant="small" className="font-normal">
                                    All
                                </Typography>
                            </MenuItem>

                            <hr className=" border-blue-gray-50" />

                            {eventLocations.map((location, index) => (
                                <MenuItem key={index} className="flex items-center gap-2"
                                    onClick={() => setSelectedLocation(location)} >

                                    <Typography value={location}

                                        variant="small" className="font-normal">
                                        {location}
                                    </Typography>
                                </MenuItem>

                            ))}


                        </MenuList>
                    </Menu>
                </div>
                <div className=" mx-5 px-4 flex items-center justify-end md:items-center lg:justify-end ">
                    <input type="text" id="search-navbar"
                        className="block  p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search by title"
                        value={titleSearch}
                        onChange={(e) => setTitleSearch(e.target.value)} />



                </div>

            </div>



            {selectedLocation && (
                <div className=" flex items-center mx-5 ">

                    <p className="text-sm  font-medium text-gray-800 truncate dark:text-white mx-2">
                        Selected location : </p>
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                        {selectedLocation}</p>
                </div>

            )}








            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {regularEvents.map((event, index) => (
                    <Eventcards key={index}
                        title={event.Event_Name}
                        description={event.Event_Description}
                        creator={event.Organizer}
                        date={event.Event_Date}
                        location={event.location}
                    />
                ))}
            </div>
        </section>
    )
}

export default Eventpage