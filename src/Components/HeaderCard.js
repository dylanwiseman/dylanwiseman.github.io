import React from "react";
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react";
import bitDylan from "../images/bitDylan.png";
// import { HeartIcon } from "./HeartIcon";
// import { PauseCircleIcon } from "./PauseCircleIcon";
// import { NextIcon } from "./NextIcon";
// import { PreviousIcon } from "./PreviousIcon";
// import { RepeatOneIcon } from "./RepeatOneIcon";
// import { ShuffleIcon } from "./ShuffleIcon";
import mail from "../images/mail.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";

export default function GlassCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      // isBlurred
      className="bg-transparent w-full m-4 border-none"
      shadow="none"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-3">
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
                  Developer, Author & Artist
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
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
