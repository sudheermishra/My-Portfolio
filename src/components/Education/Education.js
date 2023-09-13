import styles from "./Education.module.css";
import { SlCalender } from "react-icons/sl";
import { LiaBuildingSolid } from "react-icons/lia";

function Education() {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <hr />
      <div className={styles.college}>
        <div className={styles.bachelor}>
          <div className={styles.firstchild}>
            <p className={styles["education-title"]}> B.Tech (cs)</p>
            <p className={styles.current}>
              <span>
                <LiaBuildingSolid className={styles.universitylogo} />
              </span>
              Shekawati University
            </p>
          </div>
          <div>
            <p className={styles.yearcompleted}> Completed</p>
            <p className={styles.year}>
              <span>
                <SlCalender className={styles.universitylogo} />
              </span>
              August 2019 - March 2023
            </p>
          </div>
        </div>
      </div>
      <div className={styles.college}>
        <div className={styles.master}>
          <div className={styles.firstchild}>
            <p className={styles["education-title"]}> M.Tech</p>
            <p className={styles.current}>
              <span>
                <LiaBuildingSolid className={styles.universitylogo} />
              </span>
              Bikaner Techanical University
            </p>
          </div>
          <div>
            <p className={styles.yearcompleted}>Pursuing</p>
            <p>
              <span>
                <SlCalender className={styles.universitylogo} />
              </span>
              August 2023 - March 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
