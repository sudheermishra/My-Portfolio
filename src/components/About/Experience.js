import styles from "./Experience.module.css";
import { SlCalender } from "react-icons/sl";
import { LiaBuildingSolid } from "react-icons/lia";

const experienceData = [
  {
    title: "Web Developer Internship",
    company: "Rawyal",
    type: "Internship",
    duration: "March 2025 - Present",
  },
  {
    title: "Web Development Internship",
    company: "AcadeWise",
    type: "Internship",
    duration: "February 2025 - March 2025",
  },
];

function Experience() {
  return (
    <section className={styles.workExperience}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <hr className={styles.divider} />
      <div className={styles.timeline}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.jobTitle}>{item.title}</h3>
                <span className={styles.jobType}>{item.type}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.companyInfo}>
                  <LiaBuildingSolid className={styles.icon} />
                  <span>{item.company}</span>
                </div>
                <div className={styles.dateInfo}>
                  <SlCalender className={styles.icon} />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
