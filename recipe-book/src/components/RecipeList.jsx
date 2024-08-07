/* Make the list a separate component by extracting the code for better code organization (for example, <List />).
In this case "RecipeList" */


/* The "RecipeList" component renders a list of "RecipeCard" component for each recipe in the recipes array,
providing the ability to remove individual recipes.
If no recipes are available it will displays "No Recipes" */


import RecipeCard from "./RecipeCard.jsx";

export default function RecipeList({ recipes, removeItem }) {
  return (
    <div className="RecipePage">
      {recipes
        ? recipes.map((recipe) => (
            <RecipeCard recipe={recipe} removeItem={removeItem} />
          ))
        : "No Recipes"}
      {/* Include a condition to conditionally render content on each item in the list. For example, 
        if your list items have a property isCompleted, show :heavy_check_mark: if it is true and :x: if it is false.*/}
    </div>
  );
}
