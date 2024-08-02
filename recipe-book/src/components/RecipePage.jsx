import "../App.css";
import RecipeCard from "./RecipeCard";

export default function RenderRecipe({ recipes, removeItem }) {
  console.log(recipes);
  return (
    <div className="RecipePage">
      {recipes
        ? recipes.map((recipe) => (
            <RecipeCard recipe={recipe} removeItem={removeItem} />
          ))
        : "No Recipes"}
    </div>
  );
}
