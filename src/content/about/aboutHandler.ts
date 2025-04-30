import fs from "fs";
import path from "path";

// About-me content
const aboutMePath = path.join(
  process.cwd(),
  "src/content/about",
  "aboutMe.txt"
);
export const aboutMe = fs.readFileSync(aboutMePath, "utf-8").split("\n\n");

// About-site content
const aboutSitePath = path.join(
  process.cwd(),
  "src/content/about",
  "aboutSite.txt"
);
export const aboutSite = fs.readFileSync(aboutSitePath, "utf-8").split("\n\n");
