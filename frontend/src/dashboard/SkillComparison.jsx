import "./SkillComparison.css";
function SkillComparison() {
  const skills = [
    { name: "HTML & CSS", current: 90, required: 90 },
    { name: "JavaScript", current: 75, required: 85 },
    { name: "React.js", current: 65, required: 80 },
    { name: "Git & GitHub", current: 70, required: 75 },
    { name: "Node.js", current: 45, required: 75 },
  ];

  return (
    <section className="skill-comparison">
      <div className="comparison-header">
        <div>
          <h2>Skill Comparison</h2>
          <p>Compare your current skills with your target role requirements.</p>
        </div>
      </div>

      <div className="comparison-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>
                {skill.current}% / {skill.required}%
              </span>
            </div>

            <div className="skill-bars">
              <div className="skill-bar">
                <div
                  className="skill-current"
                  style={{ width: `${skill.current}%` }}
                ></div>
              </div>

              <div className="skill-required">
                <div
                  className="required-marker"
                  style={{ left: `${skill.required}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillComparison;