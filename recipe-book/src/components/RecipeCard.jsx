export default function RecipeCard({ recipe, removeItem }) {
  // ffdsfs
  return (
    <div key={recipe.id}>
      <img src={recipe.image} alt={recipe.name} className="ItemImage" />
      <p>Name: {recipe.name}</p>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
      <button className="del-btn" onClick={() => removeItem(recipe.id)}>
        🗑️
      </button>
    </div>
  );
}
