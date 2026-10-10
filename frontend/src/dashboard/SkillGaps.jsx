import "./SkillGaps.css";
function SkillGaps() {
  const gaps = [
    {
      name: "Node.js",
      current: 45,
      required: 75,
      priority: "High",
    },
    {
      name: "Backend Development",
      current: 40,
      required: 70,
      priority: "High",
    },
    {
      name: "Database & SQL",
      current: 55,
      required: 75,
      priority: "Medium",
    },
    {
      name: "REST APIs",
      current: 50,
      required: 70,
      priority: "Medium",
    },
  ];

  return (
    <section className="skill-gaps" id="skill-gaps">
      <div className="skill-gaps-header">
        <div>
          <h2>Skill Gaps</h2>
          <p>Focus on these skills to improve your career readiness.</p>
        </div>
      </div>

      <div className="skill-gaps-list">
        {gaps.map((gap) => (
          <div className="gap-item" key={gap.name}>
            <div className="gap-info">
              <div>
                <h3>{gap.name}</h3>
                <p>
                  Current: {gap.current}% · Required: {gap.required}%
                </p>
              </div>

              <span className={`priority ${gap.priority.toLowerCase()}`}>
                {gap.priority}
              </span>
            </div>

            <div className="gap-progress">
              <div
                className="gap-progress-fill"
                style={{
                  width: `${gap.current}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillGaps;