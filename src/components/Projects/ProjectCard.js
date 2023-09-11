import React from "react";
import styles from "./ProjectCard.module.css";
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
      <div className={styles.card}>
        <div className={styles["card-image"]}>
          <img src={img} alt={title} />
        </div>

        <div className={styles["card-details"]}>
          <h3 className={styles["card-title"]}>{title}</h3>
          <div className={styles["card-info"]}>
            <p>{projectInfo}</p>
          </div>
          <div className={styles["card-techstack"]}>
            <span>{techStack1}</span>
            <span>{techStack2}</span>
            <span>{techStack3}</span>
            <span>{techStack4}</span>
          </div>
          <div className={styles["card-links"]}>
            <a href={github} target='blank'>
              <AiFillGithub className={styles.github} />
            </a>
            <a href={liveLink} target='blank'>
              <AiOutlineLink className={styles.link} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
