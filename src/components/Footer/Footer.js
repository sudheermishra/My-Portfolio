import styles from "./Footer.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import FlipLink from "../Common/FlipLink/FlipLink";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerGroup}>
          <div
            className={styles.left}
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <FlipLink><h2>Sudheer/Portfolio</h2></FlipLink>
          </div>
          <div className={styles.middle}>
            <a href='https://github.com/sudheermishra' target='blank'>
              <AiFillGithub className={styles.github} />
            </a>
            <a
              href='https://www.linkedin.com/in/sudheer-mishra-b7302a258/'
              target='blank'
            >
              <AiFillLinkedin className={styles.linkedin} />
            </a>
          </div>

          <div className={styles.right}>
            <span className={styles.number}>+91 8824962463</span>
            <span className={styles.gmail}>sudheermishra8587@gmail.com</span>
          </div>
        </div>
        <div className={styles.designAndBuit}>
          <p>Designed and Built By Sudheer Mishra</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
