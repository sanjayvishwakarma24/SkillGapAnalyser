import "./SkillOverview.css";

function SkillOverview() {
  let result = null;

  try {
    result = JSON.parse(
      sessionStorage.getItem("skillGapAnalysis") || "null"
    );
  } catch {
    result = null;
  }

  const match = Number(result?.match_percentage ?? 0);
  const detected = result?.detected_skills?.length ?? 0;
  const missing = result?.missing_skills?.length ?? 0;

  const cards = [
    ["Skill Match", `${match}%`, "Match with selected target role"],
    ["Skills Found", detected, "Skills detected in your resume"],
    ["Skill Gaps", missing, "Skills to learn or improve"],
    ["Target Role", result?.target_role ?? "—", "Selected career role"],
  ];

  return (
    <section className="skill-overview">
      {cards.map(([label, value, description]) => (
        <article className="overview-card" key={label}>
          <span className="overview-label">{label}</span>
          <strong>{value}</strong>
          <p>{description}</p>
        </article>
      ))}
    </section>
  );
}

export default SkillOverview;