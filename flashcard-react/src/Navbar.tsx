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
      <div className="navButtons">
        <a href="/">HOME</a>
        <a href="/">EXPLORE</a>
        <a href="/">MY STUDY</a>
        <a href="/">CREATE</a>
      </div>
    </nav>
  );
}

export default Navbar;
