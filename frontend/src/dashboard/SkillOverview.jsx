import "./SkillOverview.css";
function SkillOverview() {
  return (
    <section className="skill-overview">
      <div className="overview-card">
        <span className="overview-label">Skill Match</span>
        <strong>78%</strong>
        <p>Overall compatibility</p>
      </div>

      <div className="overview-card">
        <span className="overview-label">Skills Found</span>
        <strong>18</strong>
        <p>Skills detected</p>
      </div>

      <div className="overview-card">
        <span className="overview-label">Skill Gaps</span>
        <strong>6</strong>
        <p>Skills to improve</p>
      </div>

      <div className="overview-card">
        <span className="overview-label">Career Readiness</span>
        <strong>72%</strong>
        <p>Current readiness</p>
      </div>
    </section>
  );
}

export default SkillOverview;