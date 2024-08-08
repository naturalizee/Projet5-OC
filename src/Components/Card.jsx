import { Link } from "react-router-dom";
import "../style/Card.scss";

// Displaying the image of each accommodation
function Card({ logement }) {
  return (
    <Link to={`/flat/${logement.id}`} className="kasa-card">
      <img src={logement.cover} alt={logement.title} />
      <div className="title-card">{logement.title}</div>
    </Link>
  );
}

export default Card;
