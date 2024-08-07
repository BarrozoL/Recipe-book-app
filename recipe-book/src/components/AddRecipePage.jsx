/* (AddRecipe) - A page that the user see when click on "Add Recipe" at "Sidebar" */
/* User should see the "Form", a component to create and add a new recipe */



import "./AddRecipe.css"; /* Import the necessary CSS file for styling the About page */
import { useState } from "react"; /* Import the "useState" hook from React to manage component state */
import { v4 as uuidv4 } from "uuid"; /* Import uuidv4 function to generate unique IDs for new recipes */

export default function AddRecipePage({ submitHandler }) { /* Defining and exporting AddRecipePage component */
/* "AddRecipePage" is the function that handles the "form" submission, acting as a submit handler function for the "form" */
/* "submitHander" is a prop form "AddRecipePage" */  
  /* State variables to manage the form inputs */
  const [name, setName] = useState(""); /* "useState" initializes the state variable with an empty string ("") */
  const [calories, setCalories] = useState(0); /* "useState" initializes the state variable with an empty string ("0") */
  const [image, setImage] = useState(""); /* "useState" initializes the state variable with an empty string ("") */
  const [servings, setServings] = useState(1); /* "useState" initializes the state variable with an empty string ("1") */

  /* Event handlers to update state based on user input */
  const caloriesHandler = (e) => setCalories(parseInt(e.target.value));  /* Update "calories" state */
  const nameHandler = (e) => setName(e.target.value);  /* Update "name" state */
  const imageHandler = (e) => setImage(e.target.value);  /* Update "image" state */
  const servingsHandler = (e) => setServings(parseInt(e.target.value));  /* Update "servings" state */

  const objectWrapper = (e) => { /* Function to handle the "Form" submission */
    e.preventDefault(); /* When a form is submitted by default, the browser performs a default action,
    which is to send a request to the server and reload the page.
    "e.preventDefault()""; stops the default behavior from occurring. */
    if (!name.replace(/\s/g, "").length || !calories) return;
    /* The if statement validates that the "name" is not empty and "calories" are set to valid values. */
    /* If one of above conditions fails, the "return" statement exits the handleSubmit function immediately */
    /* This validation helps prevent errors and assures that only valid data is processed and submitted. */
    const newRecipe = { /* Create a new recipe object with the current state values */
      id: uuidv4(), /* Generate a unique ID for the new recipe */
      name: name, // Recipe name from state
      calories: calories, // Recipe calories from state
      image: image, // Recipe image URL from state
      servings: servings, // Recipe servings from state
    };

    /* Clear the form fields by resetting state values */
    setCalories(0);
    setImage("");
    setServings(1);
    setName("");

    submitHandler(newRecipe); /* When "submitHandler(newRecipe)"" is called, "newRecipe" object is passed as an argument to the "submitHandler" prop,
    This means that the "AddRecipePage" function receives the "newRecipe" object and can use it as needed. */
  };

  return (
    <div className="AddRecipePage">
      <form>  {/* Form component to create and add a new recipe */}
        <div className="input-wrapper">
          <label>* Name:</label>  {/* Input field for recipe name */}
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameHandler} /* const "nameHandler" should be called whenever the value of the input changes */
          />
        </div>
        
        <div className="input-wrapper">
          <label>* Calories:</label>  {/* Input field for recipe calories */}
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={caloriesHandler}  /* const "caloriesHandler" should be called whenever the value of the input changes */
          />
        </div>
        
        <div className="input-wrapper">
          <label>Image URL:</label> {/* Input field for recipe image */}
          <input
            type="text"
            name="image"
            value={image}
            onChange={imageHandler} /* const "imageHandler" should be called whenever the value of the input changes */
          />
        </div>
        
        <div className="input-wrapper">
          <label>Servings:</label> {/* Input field for recipe servings */}
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={servingsHandler} /* const "servingsHandler" should be called whenever the value of the input changes */
          />
        </div>
        
        <button onClick={objectWrapper}>Submit</button> {/* Submit button to trigger form submission */}
      </form>
    </div>
  );
}
