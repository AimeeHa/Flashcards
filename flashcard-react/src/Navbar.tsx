import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbarRoot">
      <div id="aimee">Aimee's Cards</div>
      <div className="navButtons">
        <a href="/">Home</a>
        <a href="/">Explore</a>
        <a href="/">My Study</a>
        <a href="/">Create New Flashcards</a>
      </div>
      <div className="loginButtons">
        <a href="/">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;
