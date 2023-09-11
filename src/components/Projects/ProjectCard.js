import React from "react";
import "./ProjectCard.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
function ProjectCard({
  title,
  projectInfo,
  techStack1,
  techStack2,
  techStack3,
  techStack4,
  img,
  github,
  liveLink,
}) {
  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img src={img} alt={title} />
        </div>

        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          <div className='card-info'>
            <p>{projectInfo}</p>
          </div>
          <div className='card-techstack'>
            <span>{techStack1}</span>
            <span>{techStack2}</span>
            <span>{techStack3}</span>
            <span>{techStack4}</span>
          </div>
          <div className='card-links'>
            <a href={github} target='blank'>
              <AiFillGithub className='github' />
            </a>
            <a href={liveLink} target='blank'>
              <AiOutlineLink className='link' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
