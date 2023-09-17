import "./Header.css";
import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [clicked, setClicked] = useState(false);
  const handleNavigationClick = () => {
    setClicked(!clicked);
  };
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <header className='home'>
      <nav>
        <div className='nav-content container'>
          <div
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <h2 className='logo'>PORTFOLIO</h2>
          </div>

          <ul className={`${clicked ? "nav-links active" : "nav-links"}`}>
            <li className='nav-link link'>
              <Link
                to='home'
                smooth={true}
                duration={1000}
                offset={-300}
                onClick={handleNavigationClick}
              >
                HOME
              </Link>
            </li>
            <li className='nav-link link'>
              <Link
                to='about'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-link link'>
              <Link
                to='techstacks'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}
              >
                TECHSTACKS
              </Link>
            </li>
            <li className='nav-link link'>
              <Link
                to='projects'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}
              >
                PROJECTS
              </Link>
            </li>
            <li className='nav-link link'>
              <a href='https://drive.google.com/uc?export=download&id=152YjYIEzDm07lIjWJppi2C_70bfRkN7p'>
                CV
              </a>
            </li>
            <li className='nav-link last-nav-link'>
              <Link
                to='contact'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}
              >
                <button>CONTACT</button>
              </Link>
            </li>
          </ul>
          <div className='mobile'>
            <p className='last-para' onClick={handleClick}>
              {clicked ? <RxCross2 id='close' /> : <FaBars id='open' />}
            </p>
          </div>
          <div
            className='scroll-to-top'
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <button>
              <BsFillArrowUpCircleFill />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
