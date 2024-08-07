/*Item Details Page "RecipeDetails" - A page that displays all the details of an item selected from the items list */

/* The "RecipeDetails" component fetch and display the details of a specific recipe based on the URL parameter itemId.
It navigates to a "not found" page if the recipe doesn't exist and provides a link for updating the recipe. */



import { useParams, Navigate } from "react-router-dom";
import "./RecipeDetails.css";
import { Link } from "react-router-dom";

export default function RecipeDetails({ items }) {
  const { itemId } = useParams();
  const selectedItem = items.filter((item) => item.id === itemId)[0];

  if (!selectedItem) return <Navigate to="/not-found" />;

  return (
    <div className="item-wrapper">
      <div className="item-details">
        <img src={selectedItem.image} alt={selectedItem.name} />
        <h2>
          {selectedItem.name}{" "}
          <Link to={`/item/${selectedItem.id}/update`}>✏️</Link>
        </h2>
        <p>Calories: {selectedItem.calories}</p>
        <p>Servings: {selectedItem.servings}</p>
      </div>
    </div>
  );
}
