
import { useNavigate } from "react-router-dom";
import "./QuickActions.css";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Analyze New Resume",
      description: "Upload a new resume and start a fresh skill analysis.",
      action: () => navigate("/#analyzer"),
    },
    {
      title: "View Skill Gaps",
      description: "Review the skills you need to improve for your target role.",
      action: () => document.getElementById("skill-gaps")?.scrollIntoView({
        behavior: "smooth",
      }),
    },
    {
      title: "View Career Roadmap",
      description: "Continue learning with your personalized career roadmap.",
      action: () => document.getElementById("career-roadmap")?.scrollIntoView({
        behavior: "smooth",
      }),
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
            onClick={action.action}
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
