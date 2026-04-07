import styles from "./Footer.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import FlipLink from "../Common/FlipLink/FlipLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.topSection}>
          <div
            className={styles.brand}
            onClick={() => scroll.scrollToTop()}
          >
            <FlipLink>
              <h2 className={styles.logo}>Sudheer/Portfolio</h2>
            </FlipLink>
            <p className={styles.brandTagline}>
              Crafting high-performance digital experiences.
            </p>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.label}>Email</span>
              <a href="mailto:sudheermishra8587@gmail.com" className={styles.value}>
                sudheermishra8587@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Call</span>
              <span className={styles.value}>+91 8824962463</span>
            </div>
          </div>

          <div className={styles.socials}>
            <span className={styles.label}>Follow</span>
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/sudheermishra"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sudheer-mishra-b7302a258/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Sudheer Mishra. Built with React & SCSS.
          </p>
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            Available for new opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
