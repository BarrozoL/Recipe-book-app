/* The Footer component with the link to the GitHub repository of the project. */



export default function Footer() { /* Define and export the Footer component */
  return ( /* The Footer component returns JSX to render the footer element */

    <footer className="footer" style={{ width: document.body.offsetWidth }}>
      {/* sets the width of the "Footer" element to be equal to the width of the "body" of the document.
      In this case it will be equal to the with setted in the "div" with the className "RenderPage" */}
      
      <a href="https://github.com/BarrozoL/Recipe-book-app" target="_blank"> {/* URL of the GitHub repository and opens the link in a new tab */}
        GitHub
      </a>
    </footer>
  );
}