{
  /* The Navbar (Navbar) component that displays the app’s name and logo.*/
}

import logo from "../assets/Recipe-Papaya-icon.jpeg";
import "../App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar"
      style={{ width: document.body.offsetWidth, top: 0 }}
    >
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <p>Recipe Papaya</p>
    </nav>
  );
}
