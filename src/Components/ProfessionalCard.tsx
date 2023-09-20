import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import githubimg from "../images/github.png";
import youtube from "../images/video.png";

export default function ProjectCard({
  name,
  link,
  demo,
  github,
  desc,
  image,
  tags,
  dates,
  title,
  reviews,
}: any) {
  const tagsArray = tags?.map((tag: string, index: any) => {
    let color = "black";
    let fontColor = "white";
    switch (tag) {
      case "React":
        color = "#169ECA";
        break;
      case "React Native":
        color = "#61DAFB";
        fontColor = "black";
        break;
      case "CSS":
        color = "#2D52E5";
        fontColor = "white";
        break;
      case "Typescript":
        color = "#397CC7";
        break;
      case "Javascript":
        color = "#F0DC56";
        fontColor = "black";
        break;
      case "GraphQL":
        color = "#DE34A6";
        break;
      case "MongoDB":
        color = "#026548";
        break;
      case "Firebase":
        color = "#F6A312";
        break;
      case "NodeJs":
        color = "#519942";
        break;
      case "SCSS":
        color = "#C76393";
        break;
      case "PHP":
        color = "#7477AE";
        break;
      case "Next.js":
        fontColor = "white";
        color = "black";
        break;
      case "TailwindCSS":
        color = "#37BDF8";
        break;
      default:
        color = "black";
    }
    return (
      <p
        className="tag"
        key={index}
        style={{
          backgroundColor: color,
          color: fontColor,
          padding: ".1em .4em",
          borderRadius: "3px",
          marginTop: "0",
          marginBottom: ".25em",
        }}
      >
        {tag}
      </p>
    );
  });

  return (
    <Card
      isBlurred
      className="group bg-transparent w-full m-4 ml-0 border-none rounded-sm relative transform hover:translate-y-1 transition-transform duration-300 td-1000 border border-black"
      shadow="md"
    >
      <a href={link ? link : github} target="_blank" rel="noopener noreferrer">
        <Image
          alt="Album cover"
          className="object-cover shadow-none rounded-sm absolute z-0"
          // height=
          width="100%"
          shadow="none"
          src={image}
        />
        <CardBody className="group bg-gradient-to-r from-white to-white/30 flex-col p-0 backdrop-blur-sm hover:backdrop-blur-none transition-all duration-1000 td-1000 border border-black">
          <div className="flex flex-row justify-between w-full">
            <div className="project-content py-4 pl-4 pr-0 grow-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="highlight black"
              >
                {name}
              </a>
              {dates && <span className="h6">{dates}</span>}
              {title && (
                <span
                  style={{ fontStyle: "italic", marginBottom: ".5em" }}
                  className="h6"
                >
                  {title}
                </span>
              )}
              <div className="flex flex-row hidden md:block">
                {demo && (
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/0 justify-start"
                    radius="full"
                    variant="light"
                  >
                    <a href={demo}>
                      <Image
                        alt="Album cover"
                        className="object-cover"
                        height={25}
                        width={25}
                        shadow="none"
                        src={youtube}
                      />
                    </a>
                  </Button>
                )}
                {github && (
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/0 justify-start"
                    radius="full"
                    variant="light"
                  >
                    <a href={github}>
                      <Image
                        alt="Album cover"
                        className="object-cover"
                        height={23}
                        width={23}
                        shadow="none"
                        src={githubimg}
                      />
                    </a>
                  </Button>
                )}
              </div>
              <p className="top-desc black">{desc}</p>
            </div>
            <div className="tag-container py-4 px-2">{tagsArray}</div>
          </div>
          {reviews && (
            <div className="reviews px-4 pb-2">
              {reviews?.map((review: any, index: any) => {
                return (
                  <>
                    <p className="text-left">{`"${review?.body}"`}</p>

                    <h6
                      className="text-left"
                      style={{ fontStyle: "italic", color: "#F5F2B8" }}
                    >{`- ${review?.title}`}</h6>
                  </>
                );
              })}
            </div>
          )}
        </CardBody>
      </a>
    </Card>
  );
}
