import "./Header.css";
import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Header() {
  const [clicked, setClicked] = useState(false);
  const handleNavigationClick = () => {
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
            <NavLink to='/' className='logo'>
              <h2 className='logo'>PORTFOLIO</h2>
            </NavLink>
          </div>

          <ul className={`${clicked ? "nav-links active" : "nav-links"} `}>
            <li className='nav-link link'>
              <NavLink to='/' onClick={handleNavigationClick}>
                HOME
              </NavLink>
            </li>
            <li className='nav-link link'>
              <NavLink to='/about' onClick={handleNavigationClick}>
                ABOUT
              </NavLink>
            </li>
            <li className='nav-link link'>
              <NavLink to='/techstacks' onClick={handleNavigationClick}>
                TECHSTACKS
              </NavLink>
            </li>
            <li className='nav-link link'>
              <NavLink to='/projects' onClick={handleNavigationClick}>
                PROJECTS
              </NavLink>
            </li>
            <li className='nav-link link'>
              <a href='https://drive.google.com/uc?export=download&id=152YjYIEzDm07lIjWJppi2C_70bfRkN7p'>
                CV
              </a>
            </li>
            <li className='nav-link last-nav-link'>
              <NavLink to='/contact' onClick={handleNavigationClick}>
                <button>CONTACT</button>
              </NavLink>
            </li>
          </ul>
          <div className='mobile'>
            <span onClick={handleNavigationClick}>
              {clicked ? (
                <ImCross className='close ' />
              ) : (
                <AiOutlineMenu className='open' />
              )}
            </span>
          </div>
        </div>
      </nav>
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
    </header>
  );
}

export default Header;
