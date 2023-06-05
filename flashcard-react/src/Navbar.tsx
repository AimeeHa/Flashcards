import './Navbar.css';

// TODO: Fix all nav links
function Navbar() {
  return (
    <nav className="navbarRoot">
      <div className="navbarLeft">
        <div id="aimee">
          <a href="/">Aimee's Cards</a>
        </div>
        <a className="navButton" href="/">
          MY STUDY
        </a>
        <a className="navButton" href="/explore">
          EXPLORE
        </a>
        <a className="navButton" href="/">
          CREATE
        </a>
        {/* TODO: */}
        <form id="searchbox" action="/search">
          <input type="text" placeholder="Search for a card here"></input>
        </form>
      </div>

      <div className="navbarRight">
        <a id="login" href="/login">
          LOG IN
        </a>
        <a id="register" href="/register">
          REGISTER
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
