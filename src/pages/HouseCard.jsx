import React, { useState, useEffect } from 'react'
import { LayoutHeader, LayoutFooter } from '../Components/Layout';
import { useParams } from 'react-router-dom'
import Collapse from "../Components/Collapse"
import "../Styles/HouseCard.scss"
import "../Styles/Collapse.scss"


/* PRINCIPAL FUNCTION */
export function HouseCard() {
  return (
    <div>
      <LayoutHeader />
      <HouseDetails />
      <LayoutFooter />
    </div>
  )
}

/* FUNCTION FOR DETAILS DISPLAY */
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
    <div>
      <Slideshow pictures={house.pictures} />
      <div className="house-details">
        <div className='firstSection'>
          <div className="house-principals-infos">
            <h2>{house.title}</h2>
            <p>{house.location}</p>
            <DisplayTags tags={house.tags} />
          </div>
          <div className='hostAndRating'>
            <div className='host'>
              <p>{house.host.name}</p>
              <img className="hostPicture" src={house.host.picture} alt={house.host.name}></img>
            </div>
            <RatingStar rating={house.rating} />
          </div>
        </div>
        <div className='collapse'>
          <Collapse title="Description" content={house.description} />
          <Collapse title="Equipements" content={house.equipments.join(", ")} />
        </div>
      </div>
    </div>
  );
}

/* SUB FUNCTION FOR DISPLAYING GALLERY */
function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      <button className="fa-solid fa-chevron-left prev" onClick={prevSlide}></button>
      <img src={pictures[currentIndex]} alt={`slide ${currentIndex}`} className="carousel-image" />
      <button className="fa-solid fa-chevron-right next" onClick={nextSlide}></button>
    </div>
  );
}

/* SUB FUNCTION FOR DISPLAYING TAGS */
function DisplayTags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
}

/* SUB FUNCTION FOR DISPLAYING RATING STARS */
function RatingStar({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}></span>
  ));

  return <div className="ratingStar">{stars}</div>;
}