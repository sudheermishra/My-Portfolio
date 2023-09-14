import styles from "./About.module.css";
import html from "../../assets/Techstack/html.png";
import css from "../../assets/Techstack/css.png";
import javascript from "../../assets/Techstack/javascript.png";
import react from "../../assets/Techstack/react.png";
import vscode from "../../assets/Techstack/vscode.png";
import git from "../../assets/Techstack/git.png";
import github from "../../assets/Techstack/github.png";

function About() {
  return (
    <section className={styles.about} id='about'>
      <h2>About Me</h2>
      <hr />
      <div className={styles["about-text"]}>
        <p>
          Hello there! I'm Sudheer Mishra, a dedicated aspiring React web
          developer who's deeply passionate about crafting captivating user
          interfaces. My toolkit is packed with React, HTML, CSS, and
          JavaScript.Tyhe essential ingredients I wield to create immersive
          digital experiences. I thrive in collaborative environments that
          promote innovation and teamwork, always eager to contribute fresh
          perspectives and learn from others. I'm thrilled about the prospect of
          joining forces and making my mark in the world of cutting-edge web
          solutions.
        </p>
      </div>

      <div className={styles.technology} id='techstacks'>
        <h2>My Techstack</h2>
        <hr />
        <div className={styles["tech-stack"]}>
          <img src={html} alt='html' />
          <img src={css} alt='css' />
          <img src={javascript} alt='js' />
          <img src={react} alt='react' />
          <img src={vscode} alt='vsCode' />
          <img src={github} alt='github' />
          <img src={git} alt='git' />
        </div>
      </div>
    </section>
  );
}

export default About;
