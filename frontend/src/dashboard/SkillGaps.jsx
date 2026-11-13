
import "./SkillGaps.css";

function SkillGaps() {
  const savedResult = sessionStorage.getItem("skillGapAnalysis");
  const result = savedResult ? JSON.parse(savedResult) : null;

  const gaps = result?.missing_skills ?? [];

  return (
    <section className="skill-gaps" id="skill-gaps">
      <div className="skill-gaps-header">
        <div>
          <h2>Skill Gaps</h2>
          <p>
            Focus on these skills to improve your career readiness.
          </p>
        </div>
      </div>

      <div className="skill-gaps-list">
        {gaps.length > 0 ? (
          gaps.map((skill, index) => (
            <div className="gap-item" key={skill}>
              <div className="gap-info">
                <div>
                  <h3>{skill}</h3>
                  <p>Not detected in your resume</p>
                </div>

                <span
                  className={`priority ${
                    index < 2 ? "high" : "medium"
                  }`}
                >
                  {index < 2 ? "High Priority" : "Medium Priority"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>
            {result
              ? "No missing skills for this role."
              : "Run an analysis first to see your skill gaps."}
          </p>
        )}
      </div>
    </section>
  );
}

export default SkillGaps;
