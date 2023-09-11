import styles from "./Projects.module.css";
import ProjectCards from "./ProjectCards";
function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <div className='projects-title'>
        <h2>Projects</h2>
      </div>
      <hr />
      <div className={styles.cards}>
        <ProjectCards />
      </div>
    </section>
  );
}

export default Projects;
