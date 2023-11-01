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
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                Donor
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                Amount
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
              Date
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
              Note
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
              {data.Donor}
              </Typography>
            </td>
            <td className="p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                {data.Donation_Amount}
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
      </table>
    </Card>
  );
}

DonationsCard.propTypes = {
  data: PropTypes.object,
};