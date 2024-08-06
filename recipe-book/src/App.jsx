import "./App.css";
import RenderRecipe from "./components/RecipePage.jsx";
import recipes from "./assets/recipes.json";
import Sidebar from "./components/Sidebar.jsx";
import About from "./components/AboutPage.jsx";
import NavBar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import AddRecipePage from "./components/AddRecipePage.jsx";
import UpdateRecipe from "./components/UpdateRecipe.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

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
