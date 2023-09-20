import pound from "./images/p4pbg.png";
import algo from "./images/4d.png";
import job from "./images/jobbg.png";
import workout from "./images/w.png";
import sunset from "./images/mazebg.png";
import pickleball from "./images/pickleballbg.png";
import jpfc from "./images/jpfcbg.png";

export const projects = [
  {
    name: "JPFC",
    link: "https://github.com/dylanwiseman/flashcards",
    github: "https://github.com/dylanwiseman/flashcards",
    image: jpfc,
    desc: "Flashcard app for studying Japanese vocabulary.",
    tags: ["React Native", "Typescript", "Figma"],
  },
  {
    name: "Pickleball App",
    link: "https://www.youtube.com/watch?v=YWhVjIOvnvo",
    demo: "https://www.youtube.com/watch?v=YWhVjIOvnvo",
    github: "https://github.com/dylanwiseman/pickleball",
    image: pickleball,
    desc: "Mobile app for keeping score and logging stats for pickleball games with friends.",
    tags: ["React Native", "MongoDB", "GraphQL", "Firebase", "NodeJs"],
  },
  {
    name: "Sunset Cave",
    link: "https://dylanwiseman.github.io/maze-crawler/",
    github: "https://github.com/dylanwiseman/maze-crawler",
    image: sunset,
    desc: "Maze generator and maze solver, with a pretty CSS sunset.",
    tags: ["React", "Javascript", "CSS"],
  },
  {
    name: "Pokébase",
    link: "https://dylanwiseman.github.io/maze-crawler/",
    github: "https://github.com/dylanwiseman/maze-crawler",
    image: sunset,
    desc: "Simple Pokémon database to practice using Vue.js and Nuxt",
    tags: ["Vue.js", "Typescript", "Nuxt", "CSS"],
  },
  {
    name: "Pound4Pound",
    link: "https://pound4pound.herokuapp.com/",
    demo: "https://www.youtube.com/watch?v=fM6GMeM8fAk",
    github: "https://github.com/dylanwiseman/pound-4-pound",
    image: pound,
    desc: "Track your fitness goals and compete against gym buddies.",
    tags: ["React", "Javascript", "CSS", "MongoDB", "NodeJs"],
  },
  {
    name: "4D Maze Solver",
    link: "https://github.com/dylanwiseman/maze-solver",
    github: "https://github.com/dylanwiseman/maze-solver",
    image: algo,
    desc: "Solves 4D mazes by crossing the dimensional barrier that separates mazes in the Maze-verse.",
    tags: ["Javascript"],
  },
  {
    name: "Job Finder",
    link: "https://dylans-job-finder.herokuapp.com/",
    github: "https://github.com/dylanwiseman/job-search-app",
    image: job,
    desc: "Search for dev jobs via the Adzuna API.",
    tags: ["React", "Javascript", "CSS"],
  },
  {
    name: "Workout Guide",
    link: "https://dylans-workout-guide.herokuapp.com/",
    demo: "https://youtu.be/0BCYYXKdaYQ",
    github: "https://github.com/dylanwiseman/workout-of-the-day",
    image: workout,
    desc: "Generates a unique workout for each day of the week, based on my favorite exercises.",
    tags: ["React", "Javascript", "CSS"],
  },
];
