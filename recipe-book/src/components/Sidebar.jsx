/* The Sidebar (Sidebar) component with the links to the Home and About page. */

import List from "../assets/SidebarItems.jsx"; /* Import the list of "Sidebar" items */
import { Link } from "react-router-dom"; /* Import the "Link" component from "react-router-dom" */

export default function Sidebar() {
  return (
    <div className="side-bar" style={{ height: "100%" }}> {/* "div" for the "Sidebar" with full height */}
      {List.map((item, index) => { /* Map through each item in the "List" array */
      /* The objective of map here is to create a "Link" component to each item */
        return (
          <Link to={item.func}  /* Create a "Link" component for each item */
            key={index}>  {/* Adds a unique key attribute to help React identify which items have changed, are added or are removed */}
            <a className="side-button"> {/* className for styling CSS*/}
              {item.title} {/* Display the title of the Sidebar item */}
            </a>
          </Link>
        );
      })}
    </div>
  );
}