import React, { useState, useEffect } from "react";
import { Card, Chip, Typography } from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = ["title", "content", "status", "ResponseContent"];

function Reclamations() {
  const [reclamations, setReclamations] = useState([]);
  const [status, setStatus] = useState("all"); // Default status
  const [searchTitle, setSearchTitle] = useState(""); // Title search input

  useEffect(() => {
    // Make an HTTP GET request to your API endpoint to get reclamations based on the selected status and search title
    let apiUrl = "http://localhost:8005/api/troc/reclamation/exchange";

    if (status !== "all") {
      apiUrl = `http://localhost:8005/api/troc/reclamation/exchange/byStatus?status=${status}`;
    } else if (searchTitle) {
      apiUrl = `http://localhost:8005/api/troc/reclamation/exchange/search?title=${searchTitle}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        // Update the state with the data received from the API
        setReclamations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [status, searchTitle]); // Re-run the effect whenever the status or searchTitle changes

  return (
    <div>
      <div className="flex items-center space-x-4 mb-4">
        <Typography variant="big" color="blue-gray" className="font-semibold">
          Filter by Status:
        </Typography>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border-2 border-blue-gray-200 p-2 bg-white"
        >
          <option value="all">All</option>
          <option value="encours">En Cours</option>
          <option value="traité">Traité</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="rounded-lg border-2 border-blue-gray-200 p-2 bg-white"
        />
      </div>
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
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {reclamation.title}
                    </Typography>
                  </td>
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
                          reclamation.status === "traité"
                            ? "green"
                            : reclamation.status === "encours"
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Reclamations;
