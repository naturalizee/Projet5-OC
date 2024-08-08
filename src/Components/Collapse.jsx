import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse-item">
      <div className="collapseTitle" onClick={handleClick}>
        <h2>{title}</h2>
        <i
          className={`fa-solid fa-chevron-up chevron ${
            isVisible ? "rotate" : ""
          }`}
        ></i>
      </div>
      <p className={isVisible ? "visible" : ""}>{content}</p>
    </div>
  );
}

export default Collapse;
