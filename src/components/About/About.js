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
          Hi, I'm Sudheer Mishra — a Full-Stack Web Developer based in Jaipur,
          India. I hold an MCA (Master of Computer Applications) and spent my
          internship at Kirat Creations building real, production features for a
          PDF tools platform — not just learning in isolation, but shipping code
          that real users interacted with. I owned the backend for an AI-powered
          PDF summarizer and contributed to a document-editing pipeline, which
          taught me a lot about handling edge cases: bad input, failed requests,
          and the messy realities that tutorials don't prepare you for. Outside
          of work, I build things to learn. LearnStackHub started as a way to
          properly understand authentication — protected routes, token refresh,
          session persistence — by building a course platform with real Stripe
          payments instead of a toy example. LinkAuth Portal came from wanting
          to understand OAuth from the inside, not just drop in a library and
          move on. My core stack is React.js and JavaScript, with Node.js,
          Express, and MongoDB on the backend — and I'm currently deepening my
          skills in TypeScript and PostgreSQL. What I care about most is
          building things properly: thinking through what happens when a file is
          too large, a token expires, or a network call fails — not just the
          happy path. I'm currently looking for full-time junior/associate
          developer roles where I can keep building software that ships and
          holds up in the real world.
        </p>
      </div>
      <Experience />
      <Education />
    </section>
  );
}

export default About;
