/* Not Found Page (NotFound) - A page that renders whenever a user navigates to a URL route that doesn’t exist in the app. */

import React from "react"; /* Import "React" to use JSX and create the component */
import "../index.css"; /* Import the necessary CSS file for styling the "Notfound" page */


export default function NotFound() { /* Define and export the "NotFound" component */
  const imgURL =
    "https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png";
    /* URL of the image to display on the "NotFound" page */
  
  return (  /* Return JSX to render the "NotFound" page */
    <div className="NotFound">
      <img src={imgURL} alt="Page Not Found" /> {/* Displaying the image for the "NotFound" page */}
    </div>
  );
}
