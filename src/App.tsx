import "./App.css";
import bitDylan from "./images/bitDylan.png";
import plant2 from "./images/houseplant2.png";
import hibiscus from "./images/hibiscus.png";
import aloe from "./images/aloe.png";
import Project from "./Components/Project";
import { projects } from "./projects";
import { professional } from "./professional";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const projectsArray = projects?.map((project, index) => {
    return (
      <Project
        key={index}
        name={project?.name}
        desc={project?.desc}
        github={project?.github}
        link={project?.link}
        demo={project?.demo}
        image={project?.image}
        tags={project?.tags}
      />
    );
  });

  const professionalArray = professional?.map((project, index) => {
    return (
      <Project
        key={index}
        name={project?.name}
        desc={project?.desc}
        title={project?.title}
        link={project?.link}
        image={project?.image}
        tags={project?.tags}
        dates={project?.dates}
        reviews={project?.reviews}
      />
    );
  });

  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <div className="about-div">
            <img src={bitDylan} alt="8-bit Dylan" className="profpic" />
            <h1>Dylan Wiseman</h1>
            <h3>Full-Stack Software Engineer</h3>
            <h5>
              also sci-fi author, Spotify artist, and occasional party host
            </h5>
            <div id="contact-div">
              <a
                className="cta"
                href="mailto:dylan.wiseman22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me an email
              </a>
              <a
                href="https://github.com/dylanwiseman"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <p className="divider">|</p>
              <a
                href="https://www.linkedin.com/in/jdylanwiseman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <p className="divider">|</p>
              <a
                href="https://docs.google.com/document/d/1uKF8PeMs7TatjTy9rwlLAElnaZjqvix90ZGTzyKGiuw/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="experience-div">
            <h2>Professional:</h2>
            <div className="project-container">
              <img src={plant2} alt="plant 2" className="plant plant2" />
              <img src={hibiscus} alt="plant 1" className="plant hibiscus" />
              {professionalArray}
            </div>
          </div>
          <div id="projects-div">
            <h2>Personal:</h2>
            <div className="project-container">
              <img src={aloe} alt="plant 1" className="plant aloe" />
              {projectsArray}
            </div>
          </div>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
