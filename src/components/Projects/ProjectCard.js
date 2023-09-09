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
  github,
  liveLink,
}) {
  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img
            src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            alt=''
          />
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
