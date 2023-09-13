import "./App.css";
import bitDylan from "./images/bitDylan.png";
import plant2 from "./images/houseplant2.png";
import hibiscus from "./images/hibiscus.png";
import aloe from "./images/aloe.png";
import Project from "./Components/Project";
import ProjectCard from "./Components/ProjectCard";
import { projects } from "./projects";
import { professional } from "./professional";
import { NextUIProvider } from "@nextui-org/react";
// import Header from "./Components/Header";
import GlassCard from "./Components/HeaderCard";

function App() {
  const projectsArray = projects?.map((project, index) => {
    return (
      <ProjectCard
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
      <div className="App bg-white">
        <div className="flex row w-full">
          <div className="flex col w-full">
            <GlassCard />
          </div>
          <div className="flex col w-full">
            <GlassCard />
          </div>
        </div>

        {/* <Header /> */}
        <header className="App-header">
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
