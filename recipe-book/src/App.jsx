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

function App() {
  return (
    <div className="App">
      <NavBar />
      <div
        className="RenderPage"
        style={{
          width: document.body.offsetWidth - 300,
          height: document.body.offsetHeight - 130,
          bottom: 50,
        }}
      >
        <Routes>
          <Route path="/" element={<RenderRecipe />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/item/:itemId"
            element={<RecipeDetails items={recipes} />}
          />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Sidebar />

      <footer className="footer" style={{ width: document.body.offsetWidth }}>
        <a href="https://github.com/BarrozoL/Recipe-book-app" target="_blank">
          GitHub
        </a>
      </footer>
    </div>
  );
}
export default App;
