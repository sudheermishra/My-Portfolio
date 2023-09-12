import styles from "./Education.module.css";

function Education() {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <div className={styles.college}>
        <div className={styles.bachelor}>
          <p> B.Tech (cs)</p>
          <p>Completed</p>
          <p>Shekawati University</p>
          <p>2019 - 2023</p>
        </div>

        <div className={styles.master}>
          <p> M.Tech</p>
          <p>Pursuing</p>
          <p>Shekawati University</p>
          <p>2023 - 2025</p>
        </div>
      </div>
      <div className={styles.school}>
        <p> 12th Science Math</p>
        <p>RBSE</p>
        <p>2018</p>
      </div>
    </section>
  );
}

export default Education;
