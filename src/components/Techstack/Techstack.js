import html from "../../assets/Techstack/html.png";
import css from "../../assets/Techstack/css.png";
import javascript from "../../assets/Techstack/javascript.png";
import react from "../../assets/Techstack/react.png";
import vscode from "../../assets/Techstack/vscode.png";
import git from "../../assets/Techstack/git.png";
import github from "../../assets/Techstack/github.png";
import mongodb from "../../assets/Techstack/mongodb.png";
import nodejs from "../../assets/Techstack/nodejs.png";

import figma from "../../assets/Techstack/figma.png";
import expressjs from "../../assets/Techstack/expressjs.png";

import bootstrap from "../../assets/Techstack/bootstrap.png";
import styles from "./Techstack.module.css";

function Techstack() {
  return (
    <section className={styles.technology} id="techstacks">
      <h2>My Techstack</h2>
      <hr />
      <p>Technologies I’ve been working with recently</p>
      <div className={styles["tech-stack"]}>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="js" />
        <img src={react} alt="react" />
        <img src={nodejs} alt="nodejs" />
        <img src={expressjs} alt="expressjs" />
        <img src={mongodb} alt="mongodb" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={figma} alt="figma" />
        <img src={vscode} alt="vsCode" />
        <img src={github} alt="github" />
        <img src={git} alt="git" />
      </div>
    </section>
  );
}

export default Techstack;
