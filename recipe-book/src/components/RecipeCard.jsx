{
  /*Make the list item a separate component and use the new component to render the list items (for example, <ListItem /> or <ItemCard />),
  In this case RecipeCard*/
}

import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, removeItem }) {
  return (
    <div key={recipe.id}>
      <Link to={`/item/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="ItemImage"
          style={{ borderRadius: "50%" }}
        />

        <p>Name: {recipe.name}</p>
        <p>Calories: {recipe.calories}</p>
        <p>Servings: {recipe.servings}</p>
      </Link>
      <button className="del-btn" onClick={() => removeItem(recipe)}>
        🗑️
      </button>
      {/* Include a delete button on each list item that allows the user to delete the item from the list */}
    </div>
  );
}
