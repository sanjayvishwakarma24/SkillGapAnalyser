import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>
          Skill<span>Gap</span>
        </h2>
      </div>

      <nav className="sidebar-nav">
        <a href="#dashboard" className="active">
          Dashboard
        </a>

        <a href="/#analyzer">
          Resume Analysis
        </a>

        <a href="#skill-gaps">
          Skill Gaps
        </a>

        <a href="#career-roadmap">
          Career Roadmap
        </a>

        <a href="#recent-analysis">
          Recent Analysis
        </a>

        <a href="#profile">
          Profile
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;