import React from "react";
import styles from "./Main.module.css";
import sudheer from "../../assets/sudheer.jpg";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main>
      <div className={styles.image}>
        <img src={sudheer} alt="sudheer" />
      </div>
      <div>
        <h1>Sudheer </h1>
        <hr />
        <div>
          <p>
            Hello, I'm Sudheer Mishra, a passionate Frontend Developer with a
            specialization in React.
          </p>
        </div>
        <div className={styles.buttons}>
          <NavLink to="/projects" className="left">
            <button className={styles["left-btn"]}>Projects </button>
          </NavLink>
          <NavLink className="right" to="/contact">
            <button className={styles["right-btn"]}>Contact</button>
          </NavLink>
        </div>
      </div>
    </main>
  );
}
export default Main;
