import "./Projects.css";
import ProjectCards from "./ProjectCards";
function Projects() {
  return (
    <section className='projects'>
      <div className='projects-title'>
        <h2>Projects</h2>
      </div>
      <hr />
      <div className='cards'>
        <ProjectCards />
      </div>
    </section>
  );
}

export default Projects;
