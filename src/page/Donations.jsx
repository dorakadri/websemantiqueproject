import React, { useEffect, useState } from 'react';
import { DonationsCard } from '../components/DonationsCard';
import {
  Card,
  Typography
} from "@material-tailwind/react";

function Donations() {
  const [donations, setDonations] = useState([]);
  const [searchAmount, setSearchAmount] = useState(""); // Montant de recherche
  const [searchResults, setSearchResults] = useState([]); // Résultats de recherche

  useEffect(() => {
    fetch("http://localhost:8005/api/troc/donations")
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Fonction pour effectuer la recherche
  const handleSearch = () => {
    if (searchAmount !== "") {
      // Effectuer une requête GET pour rechercher les dons par montant
      fetch(`http://localhost:8005/api/troc/donationsByAmount?amount=${searchAmount}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setSearchResults(data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };

  return (
    <Card className="h-full w-full overflow-scroll">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Amount"
          value={searchAmount}
          onChange={(e) => setSearchAmount(e.target.value)}
          className="rounded-lg border-2 border-blue-gray-200 p-2 bg-white"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2 rounded-lg">
          Search
        </button>
      </div>

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

        {searchAmount !== "" ? (
          searchResults.map((donation, index) => (
            <DonationsCard key={index} data={donation} />
          ))
        ) : (
          donations.map((donation, index) => (
            <DonationsCard key={index} data={donation} />
          ))
        )}
      </table>
    </Card>
  );
}

export default Donations;
