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
      "Next.js",
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
];
