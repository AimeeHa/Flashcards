import './Navbar.css';
import { useEffect, useState } from 'react';
import { LuMenu } from 'react-icons/lu';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const userId = localStorage.getItem('userID');

  const checkLogin = async () => {
    const response = await fetch('http://localhost:8000/getuserinfo/');
    console.log(response);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  // TODO: Check if user is authenticated
  const loginRegister =
    userId != null ? (
      <>
        <li className="greeting-logged-in">Hi User</li>
        <li className="navButton">
          <a className="white-button">LOG OUT</a>
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
        {/* 
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
        {/* 
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
