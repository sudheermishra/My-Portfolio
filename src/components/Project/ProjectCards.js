import { projectData } from "../Data/projectData";
import ProjectCard from "./ProjectCard";

function ProjectCards() {
  return (
    <>
      {projectData.map((data) => (
        <ProjectCard {...data} key={data.id} />
      ))}
    </>
  );
}

export default ProjectCards;
