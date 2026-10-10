import "./QuickActions.css";
function QuickActions() {
  const actions = [
    {
      title: "Analyze New Resume",
      description: "Upload a new resume and start a fresh skill analysis.",
    },
    {
      title: "View Skill Gaps",
      description: "Review the skills you need to improve for your target role.",
    },
    {
      title: "View Career Roadmap",
      description: "Continue learning with your personalized career roadmap.",
    },
  ];

  return (
    <section className="quick-actions">
      <div className="quick-actions-header">
        <h2>Quick Actions</h2>
        <p>Continue where you left off or start a new analysis.</p>
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => (
          <button
  className="quick-action-card"
  key={action.title}
  onClick={() => {
    if (action.title === "Analyze New Resume") {
      window.location.href = "/#analyzer";
    }
  }}
>
            <div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </div>

            <span className="action-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuickActions;