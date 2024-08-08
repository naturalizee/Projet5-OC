import React, { useState } from "react";
import "../style/Slideshow.scss";

// Displaying the image for the accommodation page
function Slideshow({ logement }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  // Next picture function
  const nextPicture = () => {
    const totalPictures = logement.pictures.length;
    setCurrentPictureIndex((currentPictureIndex + 1) % totalPictures);
  };

  // Previous picture function
  const previousPicture = () => {
    const totalPictures = logement.pictures.length;
    setCurrentPictureIndex(
      (currentPictureIndex - 1 + totalPictures) % totalPictures
    );
  };

  // Checking to ensure there are images to display
  if (!logement.pictures || !logement.pictures.length) {
    return <div>No images available.</div>;
  }
  // Retrieving the number of images to display
  const totalPictures = logement.pictures.length;

  // Retrieving the current image to display
  const currentPicture = logement.pictures[currentPictureIndex];

  return (
    <div className="slideShow-container">
      <img
        className="pictures"
        src={currentPicture}
        alt={`View ${currentPictureIndex + 1} of ${logement.title}`}
      />
      {totalPictures > 1 && (
        <div className="navigation">
          <button
            className="fa-solid fa-chevron-left prev"
            onClick={previousPicture}
          ></button>
          <button
            className="fa-solid fa-chevron-right next"
            onClick={nextPicture}
          ></button>
        </div>
      )}
      {totalPictures > 1 && (
        <div className="picture-count">
          {currentPictureIndex + 1} / {totalPictures}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
