import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from "../Components/Collapse"
import { DisplayTags } from './DisplayTags';
import { RatingStar } from './RatingStar';

/* FUNCTION FOR DETAILS DISPLAY */
export function HouseDetails({ logement }) {
  console.log({ logement })

  return (
    <div>
      <div className="house-details">
        <div className='firstSection'>
          <div className="house-principals-infos">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <DisplayTags tags={logement.tags} />
          </div>
          <div className='hostAndRating'>
            <div className='host'>
              <p>{logement.host.name}</p>
              <img className="hostPicture" src={logement.host.picture} alt={logement.host.name}></img>
            </div>
            <RatingStar rating={logement.rating} />
          </div>
        </div>
        <div className='collapse'>
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Equipements"
            content={
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}