import React from "react";

// Displaying the rating for the accommodation

function RatingStar({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? "fa-solid fa-star" : "fa-regular fa-star"}
    ></span>
  ));

  return <div className="ratingStar">{stars}</div>;
}

export default RatingStar;
