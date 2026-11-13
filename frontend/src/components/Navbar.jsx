
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleGetStarted = () => {
    handleNavigation("analyzer");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="navbar-logo"
        onClick={() => {
          setMenuOpen(false);
          navigate("/");
        }}
      >
        Skill<span>Gap</span>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="/#home" onClick={(e) => {
          e.preventDefault();
          handleNavigation("home");
        }}>
          Home
        </a>

        <a href="/#how-it-works" onClick={(e) => {
          e.preventDefault();
          handleNavigation("how-it-works");
        }}>
          How It Works
        </a>

        <a href="/#features" onClick={(e) => {
          e.preventDefault();
          handleNavigation("features");
        }}>
          Features
        </a>

        <a href="/#analyzer" onClick={(e) => {
          e.preventDefault();
          handleNavigation("analyzer");
        }}>
          Analyzer
        </a>
      </div>

      {/* Get Started Button */}
      <button
        type="button"
        className="navbar-button"
        onClick={handleGetStarted}
      >
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
