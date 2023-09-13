import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className={styles.footerGroup}>
        <div className={styles.left}>
          <h2>Sudheer</h2>
        </div>
        <div className={styles.middle}>
          <span>
            <AiFillGithub className={styles.github} />
          </span>
          <span>
            <AiFillLinkedin className={styles.linkedin} />
          </span>
        </div>

        <div className={styles.right}>
          <span className={styles.number}> +91 8824962463</span>
          <span className={styles.gmail}>sudheermishra8587@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
