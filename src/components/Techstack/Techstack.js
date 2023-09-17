import html from "../../assets/Techstack/html.png";
import css from "../../assets/Techstack/css.png";
import javascript from "../../assets/Techstack/javascript.png";
import react from "../../assets/Techstack/react.png";
import vscode from "../../assets/Techstack/vscode.png";
import git from "../../assets/Techstack/git.png";
import github from "../../assets/Techstack/github.png";

import styles from "./Techstack.module.css";

function Techstack() {
  return (
    <div className={styles.technology} id="techstacks">
      <h2>My Techstack</h2>
      <hr />
      <p>Technologies I’ve been working with recently</p>
      <div className={styles["tech-stack"]}>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="js" />
        <img src={react} alt="react" />
        <img src={vscode} alt="vsCode" />
        <img src={github} alt="github" />
        <img src={git} alt="git" />
      </div>
    </div>
  );
}

export default Techstack;
