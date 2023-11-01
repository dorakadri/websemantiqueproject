import React from "react";
import {
  Card,
  Typography
  
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

export function DonationsCard({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
   
        <tbody>
          <tr>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Donor}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                {data.Donation_Amount.split("^^")[0]}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                  {data.Donation_Date}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                  {data.note}
              </Typography>
            </td>
          </tr>
        </tbody>
     
  );
}

DonationsCard.propTypes = {
  data: PropTypes.object,
};