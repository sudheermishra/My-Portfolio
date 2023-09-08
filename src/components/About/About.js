import "./About.css";

function About() {
  return (
    <section className='about'>
      <h1>About</h1>
      <hr />
      <div className='text-content'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed
          nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere
          malesuada
        </p>
      </div>
      <div className='tech-stack'>
        <p>
          TECH <br />
          STACK
        </p>
        <p>
          TECH <br />
          STACK
        </p>
        <p>
          TECH <br />
          STACK
        </p>
        <p>
          TECH <br />
          STACK
        </p>
      </div>
    </section>
  );
}

export default About;
