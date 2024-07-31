import "./App.css";
import List from "./assets/SidebarItems.jsx";
import logo from "./assets/Recipe-Papaya-icon.jpeg";
import RenderRecipe from "./components/RecipePage.jsx";
import { useState } from "react";

function App() {
  const [pageShowing, setPageShowing] = useState("recipe");

  return (
    <div className="App">
      <nav
        className="navbar"
        style={{ width: document.body.offsetWidth, top: 0 }}
      >
        <img src={logo} className="logo" />
        <p>Recipe Papaya</p>
      </nav>

      <div className="RenderPage">
        {pageShowing === "recipe" ? <RenderRecipe /> : <p>Nothing</p>}
      </div>

      <div className="side-bar" style={{ height: "100%" }}>
        {List.map((item, index) => {
          return (
            <a
              className="side-button"
              key={index}
              onClick={() => setPageShowing(item.func)}
            >
              {item.title}
            </a>
          );
        })}
      </div>
      <footer className="footer" style={{ width: document.body.offsetWidth }}>
        <a href="https://github.com/BarrozoL/Recipe-book-app" target="_blank">
          GitHub
        </a>
      </footer>
    </div>
  );
}
export default App;
