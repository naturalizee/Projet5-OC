import Card from "./Card";
import "../style/CardContainer.scss";

// Displaying the gallery using the Card component for each accommodation
export function CardContainer({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} logement={card} />
      ))}
    </div>
  );
}
