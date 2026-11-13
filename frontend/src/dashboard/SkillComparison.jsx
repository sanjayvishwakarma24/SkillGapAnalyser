import "./SkillComparison.css";

function SkillComparison() {
  const savedResult = sessionStorage.getItem("skillGapAnalysis");
  const result = savedResult ? JSON.parse(savedResult) : null;

  const matched = result?.matched_skills ?? [];
  const missing = result?.missing_skills ?? [];

  const skills = [
    ...matched.map((skill) => ({ skill, status: "Matched" })),
    ...missing.map((skill) => ({ skill, status: "Missing" })),
  ];

  return (
    <section className="skill-comparison">
      <div className="comparison-header">
        <h2>Skill Comparison</h2>
        <p>Skills found in your resume compared with the selected role.</p>
      </div>

      {skills.length ? (
        <div className="comparison-list">
          {skills.map(({ skill, status }) => (
            <div className="skill-row" key={skill}>
              <div className="skill-info">
                <span>{skill}</span>
                <span>{status}</span>
              </div>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div
                    className="skill-current"
                    style={{ width: status === "Matched" ? "100%" : "0%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Run an analysis first to see your skill comparison.</p>
      )}
    </section>
  );
}

export default SkillComparison;