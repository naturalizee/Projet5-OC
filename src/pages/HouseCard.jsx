import React, { useState, useEffect } from 'react'
import { LayoutHeader, LayoutFooter } from '../Components/Layout';
import { useParams } from 'react-router-dom'

export function HouseCard () {
    return (
        <div>
            <LayoutHeader/>
            <HouseDetails />
            <LayoutFooter />
        </div>
    )
}

function HouseDetails() {
    const { id } = useParams();
    const [house, setHouse] = useState(null);
  
    useEffect(() => {
      fetch('/logements.json')
        .then(response => response.json())
        .then(data => {
          const foundHouse = data.items.find(h => h.id === id);
          setHouse(foundHouse);
        })
        .catch(error => console.log('Error fetching data:', error));
    }, [id]);
  
    if (!house) {
      return <div>Loading...</div>;
    }

    return (
        <div className="house-details">
          <img src={house.pictures} alt={house.title} />
          <h2>{house.title}</h2>
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt={house.host.name} /> 
          <p>{house.location}</p>
          <ul>
            <li>{house.tags}</li>
          </ul>
          <RatingStar />
          
        </div>
      );
    }

    function RatingStar () {}