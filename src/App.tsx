import "./App.css";
import plant2 from "./images/houseplant2.png";
import mail from "./images/mail.png";
import hibiscus from "./images/hibiscus.png";
import aloe from "./images/aloe.png";
import ProjectCard from "./Components/ProjectCard";
import { projects } from "./projects";
import { professional } from "./professional";
import { NextUIProvider } from "@nextui-org/react";
import { Image, Button } from "@nextui-org/react";
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
      <div className="App bg-white px-4 md:px-12 xl:px-2 max-w-screen-xl mx-auto">
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
          <div className="experience-div lg:max-w-lg xl:max-w-xl lg:mr-8">
            <h2 className="mt-4 text-xl">Professional:</h2>
            <div className="project-container">{professionalArray}</div>
            <div>
              <h2>How did we get here?</h2>
              <p>
                I graduated BYU in 2019 with a degree in Marketing. After two
                years of tech sales, I decided I wanted to build the products
                instead and learned to code at Devmountain. On top of my dev
                work, I'm a sci-fi author at Rees Literary Agency, an artist on
                Spotify, and a photographer in my free time. If you want to
                offer me a job, collab on a song, or shoot some pics, send me an
                email.
              </p>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/0 justify-start mt-2 w-full justify-center"
                radius="full"
                variant="light"
              >
                <a href="mailto:dylan.wiseman22@gmail.com">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={25}
                    width={25}
                    shadow="none"
                    src={mail}
                  />
                </a>
              </Button>
              <p>
                FYI this portfolio is built on React using Typescript and
                Javascript, TailwindCSS, and NextUI.
              </p>
            </div>
          </div>
          <div id="projects-div lg:max-w-lg xl:max-w-xl lg:min-w-lg">
            <h2 className="mt-4 text-xl">Personal:</h2>
            <div className="project-container">{projectsArray}</div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
