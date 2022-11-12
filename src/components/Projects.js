import { useContext } from "react";
import { AppContext } from "../AppContext";

const Projects = () => {

    const { projectsData } = useContext(AppContext);

    return (
        <section id="projects" className="projects">
            <h2>{Object.keys(projectsData).length !== 0 && projectsData[0].title}</h2>
        </section>
    );
}
export default Projects;