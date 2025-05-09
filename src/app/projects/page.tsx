import ProjectsView from "@/components/ProjetctsView";
import { projects } from "@/content/projects/projects";

export default function Projects() {
    return (
        <>
            <h1 className="mt-5 text-5xl font-semibold">Projects</h1>
            <br />
            <ProjectsView projects={projects} />
        </>
    )
}