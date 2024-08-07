/*Make the list item a separate component and use the new component to render the list items (for example, <ListItem /> or <ItemCard />),
In this case RecipeCard */

/* Include a delete button on each list item that allows the user to delete the item from the list */


/* The "RecipeCard" component displays recipe details and allows navigation to a detailed page using "Link" from "react-router-dom".
It includes a delete button to remove the recipe from the list. */


import { Link } from "react-router-dom"; /* Import the "Link" component from "react-router-dom" for navigation */

export default function RecipeCard({ recipe, removeItem }) { /* Define and export the "RecipeCard" component */
  return (
    <div key={recipe.id}> {/*Create a "div" for each recipe card, with a unique key for each recipe */}
      <Link to={`/item/${recipe.id}`}> {/* "Link" component to navigate to the detailed page of the recipe */}
        <img src={recipe.image} alt={recipe.name} className="ItemImage" /> {/* Image of the recipe */}
        <p>Name: {recipe.name}</p> {/* Display the name of the recipe */}
        <p>Calories: {recipe.calories}</p> {/* Display the calories of the recipe */}
        <p>Servings: {recipe.servings}</p> {/* Display the number of servings of the recipe */}
      </Link>
      <button className="del-btn" onClick={() => removeItem(recipe)}> {/* Button to delete the recipe */}
        🗑️ {/* Trash emoji for delete button */}
      </button>
    </div>
  );
}