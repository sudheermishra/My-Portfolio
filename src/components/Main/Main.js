import React from "react";
import styles from "./Main.module.css";
function Main() {
  return (
    <main>
      <div>
        <h1>Developer Name</h1>
        <hr />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed
            nec ex non justo dictum venenatis. Fusce nec purus nec mauris
            posuere malesuada
          </p>
        </div>
        <div className={styles.buttons}>
          <a href=''>
            <button className={styles["left-btn"]}>Projects </button>
          </a>

          <a href=''>
            <button className={styles["right-btn"]}>Contact</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
