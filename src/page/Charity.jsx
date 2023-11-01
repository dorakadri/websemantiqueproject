import React, { useEffect, useState } from 'react';
import { CharityCard } from '../components/CharityCard';
import {
  Card,
  Typography
  
} from "@material-tailwind/react";

function Charity() {
  const [charitys, setCharitys] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8005/api/troc/charityevents")
      .then((response) => response.json())
      .then((data) => {
        setCharitys(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
  
      
    <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
            Organizer
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
             Participants
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
            Event_Date
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
            Event_Name
            </Typography>
          </th>
          
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
            Donations_Received
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
             Last Donations
            </Typography>
          </th>
          
        </tr>
      </thead>



        {charitys.map((charity, index) => (
          <CharityCard key={index} data={charity} />
        ))}
     
    

     </table>
    </Card>








  );
        }

export default Charity;