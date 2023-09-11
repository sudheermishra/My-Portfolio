import "./Projects.css";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <section className="projects">
      <div className="project-title">
        <h2>Projects</h2>
        <hr />
      </div>

      <div className="projects-cards">
        <ProjectCards />
      </div>
    </section>
  );
}

export default Projects;
