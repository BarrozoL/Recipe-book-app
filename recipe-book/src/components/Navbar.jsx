/* The Navbar (Navbar) component that displays the app’s name and logo. */

import logo from "../assets/Recipe-Papaya-icon.jpeg"; /* Import the logo image */
import "../App.css"; /*Import the necessary CSS file for styling the Navbar component */
import { Link } from "react-router-dom"; /* Import the "Link" component from "react-router-dom" for navigation */

export default function NavBar() { /* Define and export the NavBar component */

  return ( /* The NavBar component returns JSX to render the navigation bar ???????????????????????????????????????????? */
    <nav
      className="navbar"
      style={{ width: document.body.offsetWidth, top: 0 }}
      /* sets the width of the "Navbar" element to be equal to the width of the "body" of the document.
        In this case it will be equal to the with setted in the "div" with the className "RenderPage".
        "top: 0" sets the vertical position of the element to the top of its containing element */
    >
      <Link to="/"> {/* "Link" component for navigation to the "home page" ????????????????????????????????????????????? */}
        <img src={logo} className="logo" /> {/* Display the logo image */}
      </Link>
      <p>Recipe Papaya</p> {/* Display the app's name */}
    </nav>
  );
}