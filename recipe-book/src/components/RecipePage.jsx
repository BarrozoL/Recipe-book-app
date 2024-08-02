{
  /*Conditionally render content in the list items (RecipePage)*/
}

import "../App.css";
import RecipeList from "./RecipeList";

export default function RenderRecipe({ recipes, removeItem }) {
  console.log(recipes);
  return <RecipeList recipes={recipes} removeItem={removeItem} />;
}
