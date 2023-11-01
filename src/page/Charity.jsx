import React, { useEffect, useState } from 'react';
import { CharityCard } from '../components/CharityCard';

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
    <div className="grid"> 
      
        {charitys.map((charity, index) => (
          <CharityCard key={index} data={charity} />
        ))}
     
     </div>
  );
        }

export default Charity;
