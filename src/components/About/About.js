import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id='about'>
      <h2>About</h2>
      <hr />
      <div className={styles["about-text"]}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed
          nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere
          malesuada
        </p>
      </div>
      <div className={styles["tech-stack"]}>
        <p>
          TECH <br />
          STACK
        </p>
        <p>
          TECH <br />
          STACK
        </p>
        <p>
          TECH <br />
          STACK
        </p>
        <p>
          TECH <br />
          STACK
        </p>
      </div>
    </section>
  );
}

export default About;
