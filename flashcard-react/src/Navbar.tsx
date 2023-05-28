import './Navbar.css';

// TODO: Fix all nav links
function Navbar() {
  return (
    <nav className="navbarRoot">
      <div className="navEnds">
        <div id="aimee">
          <a
            href="/"
            style={{
              textDecoration: 'none',
              color: '#2c393d',
              paddingTop: '4px',
              fontSize: '34px',
            }}
          >
            Aimee's Cards
          </a>
        </div>
        <div className="loginButtons">
          <a id="login" href="/login">
            LOG IN
          </a>
        </div>
      </div>
      <div className="navButtonGroup">
        <a className="navButton" href="/">
          HOME
        </a>
        <a className="navButton" href="/explore">
          EXPLORE
        </a>
        <a className="navButton" href="/">
          CREATE
        </a>
        <a className="navButton" href="/">
          MY STUDY
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
