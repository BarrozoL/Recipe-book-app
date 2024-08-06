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

function App() {
  const [data, setData] = useState(recipes);

  const submitHandler = (recipe) => {
    // something
    setData([...data, recipe]);
  };
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
