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
  Full-stack developer with an MCA, focused on building real,
  production-ready web applications. During my internship at{" "}
  <strong>Kirat Creations</strong>, I worked on a PDF tools platform —
  owning the backend for an AI-powered <strong>PDF Summarizer</strong>{" "}
  (Express, Groq's LLaMA API) and contributing to a PDF text-editing tool
  built on a PDF → DOCX → PDF conversion pipeline using{" "}
  <strong>LibreOffice</strong> and <strong>JSZip</strong>. On my own, I've
  built <strong>LearnStackHub</strong>, a course-selling platform with
  auth, session refresh, protected routes, and Stripe checkout, and{" "}
  <strong>LinkAuth Portal</strong>, a LinkedIn OAuth 2.0 login system with
  secure backend token exchange and Redux Toolkit session management.
  Currently looking for <strong>full-time junior/associate developer</strong> roles
  where I can keep building things that actually ship.
</p>
      </div>
      <Experience />
      <Education />
    </section>
  );
}

export default About;
