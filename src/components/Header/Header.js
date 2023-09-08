import "./Header.css";
function Header() {
  return (
    <header>
      <nav>
        <div className='nav-content container'>
          <h2 className='logo'>Name</h2>

          <ul className='nav-links'>
            <li className='nav-link link'>
              <a href=''>Home</a>
            </li>
            <li className='nav-link link'>
              <a href=''>About</a>
            </li>
            <li className='nav-link link'>
              <a href=''>Projects</a>
            </li>
            <li className='nav-link last-nav-link'>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
