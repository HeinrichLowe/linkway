import { ProjectType } from "@/types/ProjectsType";

export const projects: ProjectType[] = [
  {
    title: "NSN - (New Social Network)",
    description:
      "'New Social Network', or simply 'NSN', is a small social networking project created for learning purposes. The project is a simple social network where users can create an account and log in. For now, these are the only available features, but I plan to add more functionalities in the future, as time and resources allow.",
    links: {
      back: "https://github.com/HeinrichLowe/NSN-Back.git",
      front: "https://github.com/HeinrichLowe/NSN-Front.git",
    },
    images: [
      "/files/projects/nsn/login.png",
      "/files/projects/nsn/homepage.png",
      "/files/projects/nsn/profile.png",
      "/files/projects/nsn/about.png",
    ],
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Next",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Docker Compose",
      "Alembic",
      "Pydantic",
    ],
  },
  {
    title: "Learning Log",
    description:
      "Learning Log is a personal project developed as part of a Django course by Professor Jefferson Lobato. The application allows users to create, organize, and store personal notes and reminders grouped by topics. It features a user authentication system, so each user can manage their own list of topics and entries securely.",
    links: "https://github.com/HeinrichLowe/Learning-Log.git",
    images: [
      "/files/projects/learning-log/home.png",
      "/files/projects/learning-log/login.png",
      "/files/projects/learning-log/topics.png",
      "/files/projects/learning-log/notes.png",
    ],
    technologies: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "Bootstrap",
      "PostgreSQL",
    ],
  },
  {
    title: "PetDevShop",
    description:
      "PetDevShop is a web application built during the Node.js course offered by B7Web. It was one of my first projects using Node.js. The app simulates a pet shop, allowing users to browse and filter animals by category (Dog, Cat, or Fish) or search by name using a search bar.",
    links: "https://github.com/HeinrichLowe/PetDevShop.git",
    images: [
      "/files/projects/petdevshop/home.png",
      "/files/projects/petdevshop/dogs.png",
      "/files/projects/petdevshop/cats.png",
      "/files/projects/petdevshop/fishes.png",
    ],
    technologies: ["Node", "TypeScript", "HTML", "CSS", "Express", "Mustache"],
  },
];
