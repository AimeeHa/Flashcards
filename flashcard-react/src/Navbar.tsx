import './Navbar.css';
import { useContext, useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from './UserProvider';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import getCookie from './getCookie';

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const user = useContext(UserContext);

  const handleLogout = async () => {
    const response = await fetch('http://localhost:8000/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken'),
      },
      credentials: 'include',
    });
    if (response.status === 200) {
      console.log('Successfully logged out!');
      navigate('/');
      navigate(0); // refresh page
    }
  };

  // Check if user is authenticated
  const loginRegister =
    user?.username != null ? (
      <>
        <li className="greeting-logged-in">
          <AccountCircleRoundedIcon style={{ color: '#3d808e' }} />{' '}
          {user.username}
        </li>
        <li className="navButton">
          <a className="white-button" onClick={handleLogout}>
            LOG OUT
          </a>
        </li>
      </>
    ) : (
      <>
        <li className="navButton">
          <Link className="white-button" to="/login">
            LOG IN
          </Link>
        </li>
        <li className="navButton">
          <Link id="register" to="/register">
            REGISTER
          </Link>
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
        <Link to="/">Aimee's Cards</Link>
      </div>

      {/* SMALLER SCREEN MENU LIST */}
      <ul className={showMenu ? 'navbarMenu show' : 'navbarMenu'}>
        <li className="navButton">
          <Link className="white-button" to="/mystudy">
            MY STUDY
          </Link>
        </li>
        <li className="navButton">
          <Link className="white-button" to="/explore">
            EXPLORE
          </Link>
        </li>
        <li className="navButton">
          <Link className="white-button" to="/create">
            CREATE
          </Link>
        </li>

        {loginRegister}
      </ul>

      {/* NORMAL SCREEEN nav buttons */}
      <ul className={showMenu ? 'navbarLeft hidden' : 'navbarLeft'}>
        <li className="navButton">
          <Link className="white-button" to="/mystudy">
            MY STUDY
          </Link>
        </li>
        <li className="navButton">
          <Link className="white-button" to="/explore">
            EXPLORE
          </Link>
        </li>
        <li className="navButton">
          <Link className="white-button" to="/create">
            CREATE
          </Link>
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
