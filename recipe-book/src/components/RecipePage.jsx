/* Conditionally render content in the list items "RecipePage" */

/* The "RenderRecipe" component pass the "recipes" and "removeItem" props to the "RecipeList" component. 
It acts as an intermediary to log the "recipes" and render the list of recipes. */


import "../App.css";
import RecipeList from "./RecipeList";

export default function RenderRecipe({ recipes, removeItem }) {
  return <RecipeList recipes={recipes} removeItem={removeItem} />;
}
