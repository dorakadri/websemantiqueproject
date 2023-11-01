import React, { useEffect, useState } from 'react';
import { DonationsCard } from '../components/DonationsCard';

function Donations() {
  const [donations, setDonations] = useState([]);
  
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

  return (
    <div className="grid"> 
      
        {donations.map((donation, index) => (
          <DonationsCard key={index} data={donation} />
        ))}
     
     </div>
  );
        }

export default Donations;
