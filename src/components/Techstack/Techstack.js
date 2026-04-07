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

const techStackData = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: javascript },
  { name: "React", img: react },
  { name: "Node.js", img: nodejs },
  { name: "Express", img: expressjs },
  { name: "MongoDB", img: mongodb },
  { name: "Bootstrap", img: bootstrap },
  { name: "Figma", img: figma },
  { name: "VS Code", img: vscode },
  { name: "GitHub", img: github },
  { name: "Git", img: git },
];

function Techstack() {
  return (
    <section className={styles.technology} id="techstacks">
      <h2 className={styles.sectionTitle}>My Techstack</h2>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>
        Technologies I’ve been working with recently
      </p>
      <div className={styles.techGrid}>
        {techStackData.map((tech, index) => (
          <div key={index} className={styles.techCard}>
            <div className={styles.iconWrapper}>
              <img src={tech.img} alt={tech.name} className={styles.techIcon} />
            </div>
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techstack;
