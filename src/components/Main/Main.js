import React from "react";
import styles from "./Main.module.css";
import sudheer from "../../assets/sudheer.jpg";

function Main() {
  return (
    <main>
      <div className={styles.image}>
        <img src={sudheer} alt='sudheer' />
      </div>

      <div>
        <h1>Sudheer Mishra</h1>
        <hr />
        <div>
          <p>
            Hello, I'm Sudheer Mishra, a passionate Frontend Developer with a
            specialization in React.
          </p>
        </div>
        <div className={styles.buttons}>
          <a href='#' className='left'>
            <button className={styles["left-btn"]}>Projects </button>
          </a>

          <a href='#' className='right'>
            <button className={styles["right-btn"]}>Contact</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
