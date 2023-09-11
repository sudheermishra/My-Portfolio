import { projectsData } from "../Data/ProjectsData";
import ProjectCard from "./ProjectCard";
function ProjectCards() {
  return (
    <>
      {projectsData.map((data) => {
        return <ProjectCard key={data.id} {...data} />;
      })}
    </>
  );
}

export default ProjectCards;
