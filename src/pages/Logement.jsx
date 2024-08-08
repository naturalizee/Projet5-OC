import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header, Footer } from "../Components/Layout";
import Slideshow from "../Components/Slideshow";
import LogementDescription from "../Components/LogementDescription";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Logements data fetch
  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const appartement = data.items.find((item) => item.id === id);
        if (appartement) {
          setLogement(appartement);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  // Display a loading indicator to avoid rendering issues
  if (loading) {
    return <div>Loading...</div>;
  }
  // Redirect to the error page in case of data retrieval error
  if (error) {
    return <Navigate to="/errorpage" />;
  }

  return (
    <div className="logementPage">
      <Header />
      <div className="ficheLogement">
        <Slideshow logement={logement} />
        <LogementDescription logement={logement} />
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
