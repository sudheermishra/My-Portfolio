import styles from "./Experience.module.css";
import { SlCalender } from "react-icons/sl";
import { LiaBuildingSolid } from "react-icons/lia";

function Experience() {
  return (
    <section className={styles.workExperience}>
      <h2> Work Experience</h2>
      <hr />
      <div className={styles.experience}>
        <div className={styles.companyDetail}>
          <p className={styles["experience-title"]}>
            Web Development Internship
          </p>
          <p className={styles.current}>
            <span>
              <LiaBuildingSolid className={styles.icon1} />
            </span>
            CyberCuboid
          </p>
        </div>
        <div className={styles.workingDateAndYear}>
          <p className={styles.internship}>Internship</p>
          <p className={styles.year}>
            <span>
              <SlCalender className={styles.icon1} />
            </span>
            June 2023 - August 2023
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
