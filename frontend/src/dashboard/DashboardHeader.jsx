
import "./DashboardHeader.css";

function DashboardHeader() {
  let profile = {};

  try {
    profile = JSON.parse(
      sessionStorage.getItem("studentProfile") || "{}"
    );
  } catch {
    profile = {};
  }

  const studentName = profile.name || "Student";

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
        <div className="profile-avatar">
          {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
        </div>

        <div>
          <strong>{studentName}</strong>
          <span>{profile.department || "Student"}</span>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
