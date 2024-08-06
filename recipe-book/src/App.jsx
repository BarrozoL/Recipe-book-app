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

  const removeItem = (item) =>
    setData(data.filter((recipe) => recipe.id !== item.id));

  const update = (item) => {
    const updatedItem = data.map((recipe) =>
      recipe.id === item.id ? item : recipe
    );
    setData(updatedItem);
  };
  return (
    <div className="App">
      <NavBar />
      <div /*RENDERIZAÇÃO DAS ROUTES COM O NAVBAR/SIDEBAR/FOOTER ???????????????????????????? */ 
        className="RenderPage"
        style={{
          width: document.body.offsetWidth - 300,
          height: document.body.offsetHeight - 130,
          bottom: 50,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<RenderRecipe recipes={data} removeItem={removeItem} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/item/:itemId/update"
            element={<UpdateRecipe data={data} update={update} />}
          />
          <Route
            path="/item/:itemId"
            element={<RecipeDetails items={data} />}
          />
          <Route
            path="/add-recipe"
            element={<AddRecipePage submitHandler={submitHandler} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}
export default App;
