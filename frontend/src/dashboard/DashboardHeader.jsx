import "./DashboardHeader.css";
function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div>
        <p className="dashboard-greeting">Welcome back 👋</p>

        <h1>Your Career Dashboard</h1>

        <p className="dashboard-subtitle">
          Track your skills, identify gaps, and build your career roadmap.
        </p>
      </div>

      <div className="dashboard-profile">
        <div className="profile-avatar">S</div>

        <div>
          <strong>Sanjay</strong>
          <span>IT Student</span>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;