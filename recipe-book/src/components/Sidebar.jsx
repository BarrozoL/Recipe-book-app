{
  /*The Sidebar (Sidebar) component with the links to the Home and About page.*/
}

import List from "../assets/SidebarItems.jsx";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side-bar" style={{ height: "100%" }}>
      {List.map((item, index) => {
        return (
          <Link to={item.func} key={index}>
            <a className="side-button">{item.title}</a>
          </Link>
        );
      })}
    </div>
  );
}
