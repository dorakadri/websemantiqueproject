import React from "react";
import {
  Card,
  Typography
  
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

export function CharityCard({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

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
              Donations
              </Typography>
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Organizer}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Participants}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Event_Date}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Event_Name}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Donations_Received}
              </Typography>
            </td>
            <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Donor + ": " + data.Donation_Amount+ "$"}
             </Typography>
              </td>
            

          </tr>
        </tbody>
      </table>
    </Card>
  );
}

CharityCard.propTypes = {
  data: PropTypes.object,
};