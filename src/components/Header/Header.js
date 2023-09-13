import "./Header.css";
import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
function Header() {
  const [clicked, setClicked] = useState(false);
  const handleNavigationClick = () => {
    setClicked(!clicked);
  };
  return (
    <header className="home">
      <nav>
        <div className="nav-content container">
          <div
            onClick={() => {
              scroll.scrollToTop();
            }}>
            <h2 className="logo">MY PORTFOLIO</h2>
          </div>

          <ul className="nav-links">
            <li className="nav-link link">
              <Link
                to="home"
                smooth={true}
                duration={1000}
                offset={-300}
                onClick={handleNavigationClick}>
                HOME
              </Link>
            </li>
            <li className="nav-link link">
              <Link
                to="about"
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}>
                ABOUT
              </Link>
            </li>
            <li className="nav-link link">
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}>
                PROJECTS
              </Link>
            </li>
            <li className="nav-link link">
              <a href="#"> CV</a>
            </li>
            <li className="nav-link last-nav-link">
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}>
                <button>CONTACT</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="scroll-to-top"
        onClick={() => {
          scroll.scrollToTop();
        }}>
        <button>
          <BsFillArrowUpCircleFill />
        </button>
      </div>
    </header>
  );
}

export default Header;
