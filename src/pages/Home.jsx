import React, { useState, useEffect } from "react";
import { Header, Footer } from "../Components/Layout.jsx";
import "../style/Home.scss";
import { CardContainer } from "../Components/CardContainer.jsx";

export function Home() {
  return (
    <div>
      <Header />
      <section className="promise">
        <h1 className="promise__h1">Chez vous, partout et ailleurs</h1>
      </section>
      <Gallery />
      <Footer />
    </div>
  );
}
function Gallery() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setHouses(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <CardContainer cards={houses} />
    </div>
  );
}
