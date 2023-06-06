import './Navbar.css';
import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';

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
      >
        <LuMenu
          style={{
            height: 28,
            width: 28,
            color: '#224851',
          }}
        />
      </button>

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

      {/* TODO: Search box*/}
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
          <a id="register" href="/register">
            REGISTER
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
