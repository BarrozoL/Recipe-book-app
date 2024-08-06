{
  /* Dashboard Page (AddRecipe) - A page that the user sees first when they open the app. 
  It should show the items list that you created previously.*/
}

import "./AddRecipe.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddRecipePage({ submitHandler }) {
  // something
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1);

  const caloriesHandler = (e) => setCalories(parseInt(e.target.value));
  const nameHandler = (e) => setName(e.target.value);
  const imageHandler = (e) => setImage(e.target.value);
  const servingsHandler = (e) => setServings(parseInt(e.target.value));

  const nav = useNavigate();

  const objectWrapper = (e) => {
    e.preventDefault();
    if (!name.replace(/\s/g, "").length || !calories) return;
    const newRecipe = {
      id: uuidv4(),
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    setCalories(0);
    setImage("");
    setServings(1);
    setName("");

    submitHandler(newRecipe);
    nav("/");
  };

  return (
    <div className="AddRecipePage">
      <form>
        {/*Create a form component that allows the user to create and add a new item to the items list. 
      The form component should be displayed on the Dashboard page.*/}
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
        <button onClick={objectWrapper}>Submit</button>
      </form>
    </div>
  );
}
