import './Navbar.css';
import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    await fetch('http://localhost:8000/check_authentication/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsAuthenticated(data.is_authenticated);
      });
  };

  const loginRegister = isAuthenticated ? (
    <>
      <li className="greeting-logged-in">Hi User</li>
      <li className="navButton">
        <a className="white-button" onClick={checkAuthenticated}>
          LOG OUT
        </a>
      </li>
    </>
  ) : (
    <>
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
    </>
  );

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
          <a className="white-button" href="/mystudy">
            MY STUDY
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/explore">
            EXPLORE
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/create">
            CREATE
          </a>
        </li>
        {loginRegister}
        {/* TODO: If not logged in
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
        TODO: If logged in
        <li className="navButton">
          <a className="white-button" onClick={checkAuthenticated}>
            LOG OUT
          </a>
        </li> */}
      </ul>

      {/* NORMAL SCREEEN nav buttons */}
      <ul className={showMenu ? 'navbarLeft hidden' : 'navbarLeft'}>
        <li className="navButton">
          <a className="white-button" href="/mystudy">
            MY STUDY
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/explore">
            EXPLORE
          </a>
        </li>
        <li className="navButton">
          <a className="white-button" href="/create">
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
        {loginRegister}
        {/* TODO: If not logged in
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
        TODO: If logged in
        <li className="greeting-logged-in">Hi User</li>
        <li className="navButton">
          <a className="white-button" onClick={checkAuthenticated}>
            LOG OUT
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
