/* About Page (AboutPage) - A page showing the project description and information about the team members (students) working on the project,
including links to your GitHub and LinkedIn profiles. */



import "./AboutPage.css"; /* Import the necessary CSS file for styling the About page */


export default function About() { /* Defining and exporting "About" component */
  const developers = [  /* Define an array of developer objects, each containing details about a team member */
    {
      name: "Lucas Barrozo",
      age: 25,
      interests:
        "Hiking, Coding, Cooking, and Coding cooking recipes while hiking.",
      image:
        "https://ca.slack-edge.com/T01BAR6KJP4-U0791B4BE79-1c73180ac9e8-512",
    },
    {
      name: "Carlos Carvalho",
      age: 28,
      interests: "Food, Music, Games, Hiking, Computer and working out",
      image:
        "https://ca.slack-edge.com/T01BAR6KJP4-U07866FMMUP-gc4092cfc557-512",
    },
    {
      name: "Matheus Almeida",
      age: 20,
      interests:
        "Hiking, Music, Games, Computer Science, and breathing (capybaras)",
      image:
        "https://ca.slack-edge.com/T01BAR6KJP4-U078P7JPCSY-cf6d5d26a4c0-512",
    },
  ];



  return (  /*Return the JSX to render the About page */
    <div className="about-page">
      <h1>Meet the Team</h1>
      {developers.map((dev, index) => ( /* Loop over each developer in the developers array */
        <div key={index} className="profile-wrap"> {/* Create a "div" for each developer profile with a unique key and a class for CSS styling */}
          <img src={dev.image} alt={dev.name} />
          <h3>{dev.name}</h3>
          <p>
            <span>{dev.age}</span> years old
          </p>
          <p>
            I enjoy <span>{dev.interests}</span>
          </p>
        </div>
      ))}
    </div>
  );
}