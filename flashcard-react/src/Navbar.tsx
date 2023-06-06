import './Navbar.css';
import { useState } from 'react';

// TODO: Fix all nav links
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbarRoot">
      <button
        className="navMenuButton"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></button>

      <div id="aimee">
        <a href="/">Aimee's Cards</a>
      </div>

      <ul className={showMenu ? 'navbarLeft small' : 'navbarLeft'}>
        <li className="navButton">
          <a className="navLink" href="/">
            MY STUDY
          </a>
        </li>
        <li className="navButton">
          <a className="navLink" href="/explore">
            EXPLORE
          </a>
        </li>
        <li className="navButton">
          <a className="navLink" href="/">
            CREATE
          </a>
        </li>
      </ul>

      {/* TODO: */}
      <form id="searchbox" action="/search">
        <input
          type="search"
          placeholder="Enter to search a flashcard, study set, ..."
        ></input>
      </form>

      <ul className={showMenu ? 'navbarRight small' : 'navbarRight'}>
        <li className="navButton">
          <a id="login" href="/login">
            LOG IN
          </a>
        </li>
        <li className="navButton">
          {' '}
          <a id="register" href="/register">
            REGISTER
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
