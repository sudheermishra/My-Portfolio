import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function Footer() {
  return (
    <footer>
      <div>
        <div className={styles.footerGroup}>
          <div
            className={styles.left}
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <h2>Sudheer/Portfolio</h2>
          </div>
          <div className={styles.middle}>
            <span>
              <a href='https://github.com/sudheermishra' target='blank'>
                <AiFillGithub className={styles.github} />
              </a>
            </span>
            <span>
              <a
                href='https://www.linkedin.com/in/sudheer-mishra-b7302a258/'
                target='blank'
              >
                <AiFillLinkedin className={styles.linkedin} />
              </a>
            </span>
          </div>

          <div className={styles.right}>
            <span className={styles.number}> +91 8824962463</span>
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
