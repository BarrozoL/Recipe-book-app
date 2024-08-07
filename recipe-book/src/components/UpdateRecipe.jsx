import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UpdateRecipe({ data, update }) {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const selectedRecipe = data.find((recipe) => recipe.id === itemId);
  if (!selectedRecipe) return <Navigate to="/items" />;

  const [name, setName] = useState(selectedRecipe.name);
  const [calories, setCalories] = useState(selectedRecipe.calories);
  const [image, setImage] = useState(selectedRecipe.image);
  const [servings, setServings] = useState(selectedRecipe.servings);
  const [instructions, setInstructions] = useState(
    selectedRecipe.instructions.join("\n")
  );

  const caloriesHandler = (e) => setCalories(parseInt(e.target.value));
  const nameHandler = (e) => setName(e.target.value);
  const imageHandler = (e) => setImage(e.target.value);
  const servingsHandler = (e) => setServings(parseInt(e.target.value));
  const instructionsHandler = (e) => {
    setInstructions(e.target.value);
  };

  const objectWrapper = (e) => {
    e.preventDefault();
    if (!name.replace(/\s/g, "").length || !calories) return;

    const instructArr = instructions
      .split("\n")
      .filter((instr) => instr.trim() !== "");

    const newRecipe = {
      id: itemId,
      name: name,
      calories: calories,
      image: image,
      servings: servings,
      instructions: instructArr,
    };

    update(newRecipe);
    navigate("/");
  };

  return (
    <div className="AddRecipePage">
      <form onSubmit={objectWrapper}>
        <div className="input-wrapper">
          <label>* Name:</label>
          <input type="text" name="name" value={name} onChange={nameHandler} />
        </div>
        <div className="input-wrapper">
          <label>* Calories:</label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={caloriesHandler}
          />
        </div>
        <div className="input-wrapper">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={imageHandler}
          />
        </div>
        <div className="input-wrapper">
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={servingsHandler}
          />
        </div>
        <div className="input-wrapper">
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={instructions}
            onChange={instructionsHandler}
            rows={10}
            cols={40}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
