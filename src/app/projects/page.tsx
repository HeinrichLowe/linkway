import ProjectsView from "@/components/ProjetctsView";
import { projects } from "@/content/projects/projects";

export default function Projects() {
    return (
        <>
            <h1 className="mt-4 text-4xl font-semibold">Projects</h1>
            <br />
            <ProjectsView projects={projects} />
        </>
    )
}