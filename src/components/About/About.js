import Experience from "./Experience";
import Education from "./Education";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
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
      <Experience />
      <Education />
    </section>
  );
}

export default About;
