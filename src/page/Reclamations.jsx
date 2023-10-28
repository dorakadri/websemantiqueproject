import React, { useState, useEffect } from "react";
import { Card, Chip,Typography } from "@material-tailwind/react";
import axios from "axios";
const TABLE_HEAD = ["content", "status", "ResponseContent"];

function Reclamations() {
  const [reclamations, setReclamations] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to your API endpoint
    axios
      .get("http://localhost:8005/api/troc/reclamation")
      .then((response) => {
        // Update the state with the data received from the API
        setReclamations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty array [] ensures that the effect runs once when the component mounts.

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {reclamations.map((reclamation, index) => {
            const isLast = index === reclamations.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {reclamation.content}
                  </Typography>
                </td>

                <td className={classes}>
                  <div className="w-max">
                    <Chip
                      size="sm"
                      variant="ghost"
                      value={reclamation.status}
                      color={
                        reclamation.status === "1"
                          ? "green"
                          : reclamation.status === "0"
                          ? "amber"
                          : "red"
                      }
                    />
                  </div>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {reclamation.hasResponseContent}
                  </Typography>
                </td>
                <td className={classes}>
                  <div className="w-max">
                    <Chip
                      size="sm"
                      variant="ghost"
                      value={status}
                      color={
                        status === "paid"
                          ? "green"
                          : status === "pending"
                          ? "amber"
                          : "red"
                      }
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Reclamations;
