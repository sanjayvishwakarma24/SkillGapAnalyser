import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            Skill<span>Gap</span>
          </h2>

          <p>
            Analyze your skills, discover your gaps, and build a smarter
            career path.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#analyzer">Analyzer</a>
        </div>

        <div className="footer-links">
          <h3>Project</h3>

          <a href="#analyzer">Skill Analysis</a>
          <a href="#analyzer">Career Roadmap</a>
          <a href="#features">AI Features</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SkillGap. All rights reserved.</p>
        <p>Built for smarter career decisions.</p>
      </div>
    </footer>
  );
}

export default Footer;