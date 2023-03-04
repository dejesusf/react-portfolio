import React from 'react';
import Image from '../images/index';
import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    title: "Anoma Drama Llama",
    image: Image[0],
    altText: "Customize your llama to suit your drama.",
    description: "Anoma Drama Llama allows users to choose how public they want to display their thoughts and emotions. The user is able to set a current emotion or post journals using multiple emotions. These moods can be tracked hourly, daily, and even yearly. All posts default to private because this journal intimately belongs to the user and they have all the power on what they allow people to see.",
    tech: "This project utilizes MySQL, Handlebars, Nodemailer, Plotly, and Ninja Quotes API.",
    contributers: "This was a group project. Creators and their github profiles can be found in the repository link below.",
    link: "https://github.com/dejesusf/anoma-drama-llama",
    repoLink: "https://github.com/dejesusf/anoma-drama-llama"
  },
  {
    id: uuidv4(),
    title: "Moves & Brews",
    image: Image[3],
    altText: "Text",
    description: "Moves & Brews would allow for the user to search a city and the page will populate with nearby breweries and events.",
    tech: "This application uses HTML, CSS, JavaScript, and two APIs: OpenBrewery and TicketMaster.",
    contributers: "This was originally a group project. You can find the other creators in the repository link below. I've recently taken the time to update the webpage aesthetics to match my style of webpages.",
    link: "https://dejesusf.github.io/moves-and-brews",
    repoLink: "https://github.com/dejesusf/moves-and-brews"
  },
  {
    id: uuidv4(),
    title: "ReadMe Generator",
    image: Image[5],
    altText: "An example of a generated readMe using this application",
    description: "For this assignment, we were given the task of generating a markdown file with the use of user inputs straight from the command line.",
    tech: "This uses 100% JavaScript with the help of node.js and inquirer.",
    contributers: "This was a single user assignment and I was the only contributer.",
    link: "https://github.com/dejesusf/readme-generator",
    repoLink: "https://github.com/dejesusf/readme-generator"
  },
  {
    id: uuidv4(),
    title: "SQL: Employee Tracker",
    image: Image[4],
    altText: "Database query shown in VSCode",
    description: "This assignment focuses on the use of SQL, specifically MySQL, to create a database of employees for a given company. This application also allows user inputs because of the inquirer npm package.",
    tech: "This terminal command-line application uses MySQL.",
    contributers: "This was a single user assignment and I was the only contributer.",
    link: "https://github.com/dejesusf/sql-employee-tracker",
    repoLink: "https://github.com/dejesusf/sql-employee-tracker"
  }
]

export default function Portfolio() {
  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <h1>PORTFOLIO</h1>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="column">
          {projects.map((element) => {
              return (
                <div key={element.id}className="middle g1-block">
                  <div className="small-left" id="image">
                    <a href={element.link} target="_blank" rel="noopener noreferrer">
                      <img src={element.image} alt={element.altText} />
                    </a>
                  </div>

                  <div className="large-right">
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                    <p>{element.tech}</p>
                    <p>{element.contributers}</p>
                    <p><strong>Link to Repository: </strong><a href={element.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  );
}