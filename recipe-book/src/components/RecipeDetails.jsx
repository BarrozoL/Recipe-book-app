import { useParams, Navigate } from "react-router-dom";
import "./RecipeDetails.css";

export default function RecipeDetails({ items }) {
  const { itemId } = useParams();
  const selectedItem = items.filter((item) => item.id === itemId)[0];

  if (!selectedItem) return <Navigate to="/not-found" />;

  return (
    <div className="item-wrapper">
      <div className="item-details">
        <img src={selectedItem.image} alt={selectedItem.name} />
        <h2>{selectedItem.name}</h2>
        <p>Calories: {selectedItem.calories}</p>
        <p>Servings: {selectedItem.servings}</p>
      </div>
    </div>
  );
}
