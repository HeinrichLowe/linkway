export type ProjectType = {
  title: string;
  description: string;
  links:
    | string
    | {
        back: string;
        front: string;
      };
  images: string | string[];
  technologies: string[];
};
