import './Navbar.css';
import { useEffect, useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [userName, setUserName] = useState('');

  const checkLogin = async () => {
    const response = await fetch('http://localhost:8000/getuserinfo/', {
      method: 'GET',
      credentials: 'include',
    });
    setUserName((await response.json()).name);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogout = async () => {
    const response = await fetch('http://localhost:8000/logout/', {
      method: 'POST',
      credentials: 'include',
    });
    if (response.status === 200) {
      console.log('Successfully logged out!');
      setUserName('');
      navigate('/');
    }
  };

  // TODO: Check if user is authenticated
  const loginRegister =
    userName != null ? (
      <>
        <li className="greeting-logged-in">Hi {userName}</li>
        <li className="navButton">
          <a className="white-button" onClick={handleLogout}>
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
      </ul>
    </nav>
  );
}

export default Navbar;
