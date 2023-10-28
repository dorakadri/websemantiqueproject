import React, { useEffect, useState } from 'react'
import { AssociationCards } from '../components/AssociationCards'

function Association() {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8005/SpringMVC/troc/associations")
      .then((response) => response.json())
      .then((data) => {
        setAssociations(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {associations.map((association, index) => (
          <AssociationCards key={index} data={association} />
        ))}
      </div>
    </div>
  );
}

export default Association