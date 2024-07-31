import recipes from "../assets/recipes.json";
import { useState } from "react";
import "../App.css";
import RecipeCard from "./RecipeCard";

export default function RenderRecipe() {
  const [list, setList] = useState(recipes);

  const removeItem = (id) => setList(list.filter((item) => item.id !== id));

  return (
    <div className="RecipePage">
      {list.length === 0
        ? "No Items"
        : list.map((recipe) => (
            <RecipeCard recipe={recipe} removeItem={removeItem} />
          ))}
    </div>
  );
}
