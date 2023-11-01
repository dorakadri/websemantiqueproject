import React, { useEffect, useState } from 'react'
import { OwnersCards } from '../components/OwnersCard';
import { useNavigate } from 'react-router-dom';

function Owners() {
  const [owners, setAssociationsowners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8005/SpringMVC/troc/AssociationOwner")
      .then((response) => response.json())
      .then((data) => {
        setAssociationsowners(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
  const handleCardClick = (lastName) => {
    navigate(`/owner-detail/${lastName}`);
  };

  return (
    <div>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {owners.map((owner, index) => (
          <OwnersCards key={index} data={owner}
          onClick={() => handleCardClick(owner.lastname)}

          />
        ))}
      </div>
    </div>
  );
}

export default Owners