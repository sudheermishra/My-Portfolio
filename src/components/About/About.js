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
          Hello! I’m Sudheer Mishra, a software developer dedicated to building
          high-performance web applications using the MERN stack. My technical
          arsenal includes MongoDB, Express.js, React, and Node.js, with a
          strong focus on modern frontend frameworks and AI integration. I
          recently launched an <strong>AI-Powered PDF Summarizer</strong> that
          leverages Groq LLM (Llama-3.3) for intelligent content extraction,
          complementing my work on <strong>AI Product Image Generation</strong>
          and secure <strong>OAuth platforms</strong>. I am passionate about
          engineering scalable, user-focused solutions and continuously push the
          boundaries of web development through innovative projects and
          collaborative problem-solving.
        </p>
      </div>
      <Experience />
      <Education />
    </section>
  );
}

export default About;
