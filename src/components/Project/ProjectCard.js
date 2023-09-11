import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import "./ProjectCard.css";

function ProjectCard({
  title,
  description,
  img,
  techstack1,
  techstack2,
  techstack3,
  techstack4,
  github,
  livelink,
}) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={img} alt={title} height={200} />
        </div>

        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <div className="card-description">
            <p>{description}</p>
          </div>
          <div className="card-techstack">
            <span>{techstack1}</span>
            <span>{techstack2}</span>
            <span>{techstack3}</span>
            <span>{techstack4}</span>
          </div>
          <div className="card-links">
            <a href={github} target="_blank">
              <AiFillGithub />
            </a>
            <a href={livelink} target="_blank">
              <AiOutlineLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
