
import "./Profile.css";

function Profile() {
  let profile = {};

  try {
    profile = JSON.parse(
      sessionStorage.getItem("studentProfile") || "{}"
    );
  } catch {
    profile = {};
  }

  const studentName = profile.name || "Name Not Available";
  const degree = profile.degree || "Not Available";
  const department = profile.department || "Not Available";
  const college = profile.college || "Not Available";

  return (
    <section className="profile-section" id="profile">
      <div className="profile-header">
        <div>
          <h2>My Profile</h2>
          <p>Your academic and career profile.</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-avatar-large">
          {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
        </div>

        <div className="profile-info">
          <h3>{studentName}</h3>
          <p>{degree} – {department}</p>
          <span>{college}</span>
        </div>
      </div>
    </section>
  );
}

export default Profile;
