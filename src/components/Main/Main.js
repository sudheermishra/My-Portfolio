import React from "react";
import "./Main.css";
function Main() {
  return (
    <main>
      <div className='header'>
        <h1>Developer Name</h1>
        <hr />
        <div className='text-content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed
            nec ex non justo dictum venenatis. Fusce nec purus nec mauris
            posuere malesuada
          </p>
        </div>
        <div className='buttons'>
          <button className='left-btn'>
            <a href=''>Projects</a>
          </button>
          <button className='right-btn'>
            <a href=''>Contact</a>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
