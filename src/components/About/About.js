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
          Hello! I’m Sudheer Mishra, a software developer with hands-on
          experience in building web applications using the MERN stack. My
          toolkit includes MongoDB, Express.js, React, and Node.js, along with
          HTML, CSS, and JavaScript. I’ve worked on projects like a personal
          portfolio, a Student Report Advisor system, and a shopping cart
          application, where I focused on responsive UI, state management, and
          real-world functionality. I’m interested in building scalable,
          user-focused applications and continuously improving my skills through
          practical development and collaboration.
        </p>
      </div>
      <Experience />
      <Education />
    </section>
  );
}

export default About;
