import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
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
        <div className={styles.designAndBuit}>
          <p>Designed and Built By Sudheer Mishra & Uzair Sayyed</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
