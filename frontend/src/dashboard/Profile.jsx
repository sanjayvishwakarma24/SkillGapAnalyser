import "./Profile.css";

function Profile() {
  return (
    <section className="profile-section" id="profile">
      <div className="profile-header">
        <div>
          <h2>My Profile</h2>
          <p>Manage your career profile and target role.</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-avatar-large">S</div>

        <div className="profile-info">
          <h3>Sanjay</h3>
          <p>IT Student</p>
          <span>Information Technology</span>
        </div>
      </div>
    </section>
  );
}

export default Profile;