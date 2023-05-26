import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbarRoot">
      <div className="navEnds">
        <div id="aimee">Aimee's Cards</div>
        <div className="loginButtons">
          <a id="login" href="/">
            LOG IN
          </a>
        </div>
      </div>
      <div className="navButtonGroup">
        <a className="navButton" href="/">
          HOME
        </a>
        <a className="navButton" href="/">
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
