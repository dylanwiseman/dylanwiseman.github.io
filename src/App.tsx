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
      <ProjectCard
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
      <div className="App bg-white px-12 xl:px-2 max-w-screen-xl mx-auto">
        <div className="flex row border-b border-black relative">
          <img
            src={plant2}
            alt="plant 2"
            className="plant plant2 bottom-0 right-20"
          />
          <img
            src={hibiscus}
            alt="plant 1"
            className="plant hibiscus bottom-0 right-60"
          />
          <img
            src={aloe}
            alt="plant 1"
            className="plant aloe bottom-0 right-40"
          />
          <div className="flex col w-full">
            <GlassCard />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="experience-div lg:mr-8">
            <h2 className="mt-4 text-xl">Professional:</h2>
            <div className="project-container">{professionalArray}</div>
          </div>
          <div id="projects-div">
            <h2 className="mt-4 text-xl">Personal:</h2>
            <div className="project-container">{projectsArray}</div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
