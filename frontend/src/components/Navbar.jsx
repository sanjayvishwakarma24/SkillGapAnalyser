import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Skill<span>Gap</span>
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#features">Features</a>
        <a href="#analyzer">Analyzer</a>
      </div>

      <button className="navbar-button">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;