import styles from "./Education.module.css";
import { SlCalender } from "react-icons/sl";
import { LiaBuildingSolid } from "react-icons/lia";

const educationData = [
  {
    degree: "Master of Computer Applications",
    institution: "Shekhawati Institute of Technology (Bikaner Technical University)",
    status: "Completed",
    duration: "August 2023 - July 2025",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Shekhawati Institute of Technology (Pandit Deendayal Upadhyay University)",
    status: "Completed",
    duration: "August 2019 - May 2022",
  },
];

function Education() {
  return (
    <section className={styles.education}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <hr className={styles.divider} />
      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.degreeTitle}>{item.degree}</h3>
                <span className={styles.status}>{item.status}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.institutionInfo}>
                  <LiaBuildingSolid className={styles.icon} />
                  <span>{item.institution}</span>
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

export default Education;
