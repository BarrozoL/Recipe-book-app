import "./App.css"; /*Import the necessary CSS file for styling the "App" component */
import RenderRecipe from "./components/RecipePage.jsx"; /* Import the "RecipePage" component */
import recipes from "./assets/recipes.json"; /* Import recipe data from "recipes.json" */
import Sidebar from "./components/Sidebar.jsx"; /* Import the "Sidebar" component */
import About from "./components/AboutPage.jsx"; /* Import the "AboutPage" component */
import NavBar from "./components/Navbar.jsx"; /* Import the "Navbar" component */
import { Routes, Route } from "react-router-dom"; /* Import components for routing from the "react-router-dom" library  */
import NotFound from "./components/NotFound.jsx"; /* Import the "NotFound" component */
import RecipeDetails from "./components/RecipeDetails.jsx"; /* Import the "RecipeDetails" component */
import AddRecipePage from "./components/AddRecipePage.jsx"; /* Import the "AddRecipePage" component */
import UpdateRecipe from "./components/UpdateRecipe.jsx"; /* Import the "UpdateRecipe" component */
import Footer from "./components/Footer.jsx"; /* Import the "Footer" component */
import { useState } from "react"; /* Import "useState" hook to manage state within functional components */

function App() { /* Defining "App" component */
  const [data, setData] = useState(recipes);  /* State to manage and display the list of recipes */
  /* The const "data" holds the current list of "recipes" */
  /* The function "setData" updates the list of recipes
  and triggers a re-render of the "App" component with the new data (each time is called) */

  const submitHandler = (recipe) => {   /* Function to add a new recipe to the list */
    setData([...data, recipe]); /* Adds the new recipe to the existing list */
  };
  /* "submitHandler" is a function passed as a prop to "AddRecipePage" function in "AddRecipePage" component */
  /* "Recipe" is The new recipe object created in "AddRecipePage" when the form is submitted */
  /* When the form is submitted, "submitHandler" is called with the new recipe,
  allowing the "App" component to update its state and include the new recipe in the list */

  const removeItem = (item) =>  /* Function to remove a recipe */
    setData(data.filter((recipe) => recipe.id !== item.id));
    /* Create a new array: the "filter" method goes through each recipe in the "data" array and
    includes only those recipes that the id does not match the id of the item passed to the function.
    The new array formed is like a trash container array with not matched id's */
  /* The function action occurs when gets triggered by the button with className of "del-btn" in "RecipeCard" component */

  const update = (item) => {  /* Function to update a recipe */
    const updatedItem = data.map((recipe) =>
      recipe.id === item.id ? item : recipe
    );
    setData(updatedItem);
  };
/* Creates a new array: the "map" method goes through each recipe in the "data" array and
for each recipe, it checks if the recipe.id matches the item.id.
If there is a match, it replaces the existing recipe with the new item (the updated recipe).
If there is no match, it keeps the recipe unchanged */
/* setData will be updated, and the "App" component will re-render to display the updated information. */
  
  return (
    <div className="App">
      <NavBar /> {/* "NavBar" component renderization */}
      <div /*RENDERIZAÇÃO DAS ROUTES COM O NAVBAR/SIDEBAR/FOOTER ???????????????????????????? */ 
        className="RenderPage"
        style={{
          width: document.body.offsetWidth - 300, /* Adjusts the width of the "div" to be the full width of the body less 300 pixels.*/
          height: document.body.offsetHeight - 130, /* Adjusts the height of the "div" to be the full height of the body less 130 pixels */
          bottom: 50, /* Set the bottom "offset" of the "div to 50 pixels.
          Sets a vertical "offset" from the bottom edge. It ensures that the "div" maintains a consistent margin from the bottom,
          allowing space for the "Footer" component */
        }}
      >
        <Routes>  {/* Defining "Routes" to render different components based on the URL path */}
          <Route
            path="/"
            element={<RenderRecipe recipes={data} removeItem={removeItem} />} /* Renders the  */
          />
          <Route path="/about" element={<About />} /> {/* Renders the About page */}
          <Route
            path="/item/:itemId/update"
            element={<UpdateRecipe data={data} update={update} />} /* Renders the "UpdateRecipe" component */
          />
          <Route
            path="/item/:itemId"
            element={<RecipeDetails items={data} />} /* Renders the "RecipePage" component*/
          />
          <Route
            path="/add-recipe"
            element={<AddRecipePage submitHandler={submitHandler} />}  /* Renders the "AddRecipePage" component */
          />
          <Route path="*" element={<NotFound />} /> {/* Renders the "NotFound" component */}
        </Routes>
      </div>
      <Sidebar /> {/* Renders the "Sidebar" component */}
      <Footer /> {/* Renders the "Footer" component */}
    </div>
  );
}
export default App;
