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
    
  );
}

CharityCard.propTypes = {
  data: PropTypes.object,
};