import recipes from "../assets/recipes.json";
import { useState } from "react";
import "../App.css";

export default function RenderRecipe() {
  const [list, setList] = useState(recipes);

  const removeItem = (id) => setList(list.filter((item) => item.id !== id));

  return (
    <div className="RecipePage">
      {list.length === 0
        ? "No Items"
        : list.map((recipe) => (
            <div key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} />
              <p>Name: {recipe.name}</p>
              <p>Calories: {recipe.calories}</p>
              <p>Servings: {recipe.servings}</p>
              <button className="del-btn" onClick={() => removeItem(recipe.id)}>
                🗑️
              </button>
            </div>
          ))}
    </div>
  );
}
