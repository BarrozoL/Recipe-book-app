import React from "react";
import "../index.css";

export default function NotFound() {
  const imgURL =
    "https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png";
  return (
    <div className="NotFound">
      <img src={imgURL} alt="Page Not Found" />
    </div>
  );
}
