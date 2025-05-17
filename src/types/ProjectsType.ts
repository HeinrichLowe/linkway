export type ProjectLink = {
  type: "frontend" | "backend" | "fullstack" | "demo" | "docs" | "other";
  label: string;
  url: string;
};

export type ProjectType = {
  title: string;
  description: string;
  links: ProjectLink[];
  images: string | string[];
  technologies: string[];
};
