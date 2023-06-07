import './Navbar.css';
import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';

// TODO: Fix all nav links
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <nav className="navbarRoot">
      <button
        className={menuClicked ? 'navMenuButton clicked' : 'navMenuButton'}
        onClick={() => {
          setShowMenu(!showMenu);
          setMenuClicked(!menuClicked);
        }}
      >
        <LuMenu
          style={{
            height: 28,
            width: 28,
            color: `${menuClicked ? '#ffffff' : '#224851'}`,
          }}
        />
      </button>

      <div id="aimee">
        <a href="/">Aimee's Cards</a>
      </div>

      {/* SMALLER SCREEN MENU LIST */}
      <ul className={showMenu ? 'navbarMenu show' : 'navbarMenu'}>
        <li className="navButton">
          <a className="white-button" href="/">
            MY STUDY
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/explore">
            EXPLORE
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/">
            CREATE
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/login">
            LOG IN
          </a>
        </li>
        <li className="navButton">
          <a id="register" href="/register">
            REGISTER
          </a>
        </li>
      </ul>

      {/* NORMAL SCREEEN nav buttons */}
      <ul className={showMenu ? 'navbarLeft hidden' : 'navbarLeft'}>
        <li className="navButton">
          <a className="white-button" href="/">
            MY STUDY
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/explore">
            EXPLORE
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/">
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
          <a className="white-button" href="/login">
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
