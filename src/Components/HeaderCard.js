import React from "react";
import { Image, Button } from "@nextui-org/react";
import bitDylan from "../images/bitDylan.png";
import mail from "../images/mail.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";
import camera from "../images/camera.png";
import book from "../images/book.png";
import spotify from "../images/spotify.png";

export default function GlassCard() {
  return (
    <div className="flex row p-6 pb-12 md:pb-6">
      <div className="mr-6 hidden md:block">
        <Image
          alt="Album cover"
          className="object-cover shadow-none rounded-sm"
          height={100}
          width={100}
          shadow="none"
          src={bitDylan}
        />
      </div>

      <div className="flex flex-col col-span-6 md:col-span-9">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-0">
            <h1 className="font-semibold text-foreground/90 text-xl">
              Dylan Wiseman
            </h1>
            <p className="text-small text-foreground/80 mb-1">
              Developer, Author, Photographer, Artist
            </p>
          </div>
        </div>

        <div className="flex w-full items-center">
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
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
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
            radius="full"
            variant="light"
          >
            <a href="https://github.com/dylanwiseman">
              <Image
                alt="Album cover"
                className="object-cover"
                height={23}
                width={23}
                shadow="none"
                src={github}
              />
            </a>
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
            radius="full"
            variant="light"
          >
            <a href="https://www.linkedin.com/in/jdylanwiseman/">
              <Image
                alt="Album cover"
                className="object-cover"
                height={25}
                width={25}
                shadow="none"
                src={linkedin}
              />
            </a>
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
            radius="full"
            variant="light"
          >
            <a href="https://docs.google.com/document/d/1uKF8PeMs7TatjTy9rwlLAElnaZjqvix90ZGTzyKGiuw/edit">
              <Image
                alt="Album cover"
                className="object-cover"
                height={30}
                width={30}
                shadow="none"
                src={resume}
              />
            </a>
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
            radius="none"
            variant="light"
          >
            <a href="https://www.instagram.com/dylwiseman/">
              <Image
                alt="Album cover"
                className="object-cover rounded-none"
                height={25}
                width={25}
                shadow="none"
                src={camera}
              />
            </a>
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
            radius="none"
            variant="light"
          >
            <a href="http://www.reesagency.com/authors">
              <Image
                alt="Album cover"
                className="object-cover rounded-none"
                height={30}
                width={30}
                shadow="none"
                src={book}
              />
            </a>
          </Button>
          <Button
            isIconOnly
            className="data-[hover]:bg-foreground/0 justify-start"
            radius="none"
            variant="light"
          >
            <a href="https://open.spotify.com/artist/2eHTvS0whEgEoF1aNQ1Rh5">
              <Image
                alt="Album cover"
                className="object-cover rounded-none"
                height={25}
                width={25}
                shadow="none"
                src={spotify}
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
