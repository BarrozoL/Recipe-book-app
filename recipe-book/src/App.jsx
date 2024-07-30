import "./App.css";
import List from "./assets/SidebarItems.jsx";

function App() {
  console.log(document.body.offsetHeight);
  return (
    <div className="App">
      <nav
        className="navbar"
        style={{ width: document.body.offsetWidth, top: 0 }}
      ></nav>

      <div className="side-bar" style={{ height: "100%" }}>
        {List.map((item, index) => {
          return (
            <a className="side-button" key={index}>
              {item.title}
            </a>
          );
        })}
      </div>
      <footer
        className="footer"
        style={{ width: document.body.offsetWidth }}
      ></footer>
    </div>
  );
}
export default App;
