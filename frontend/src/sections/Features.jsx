import "./Features.css";

function Features() {
  const features = [
    {
      icon: "📄",
      title: "Resume Analysis",
      description:
        "Upload your resume in PDF or DOCX format and extract relevant information.",
    },
    {
      icon: "🧠",
      title: "Skill Detection",
      description:
        "Identify technical skills from your resume using a predefined skill-matching process.",
    },
    {
      icon: "🎯",
      title: "Skill Gap Detection",
      description:
        "Find the skills missing from your profile for your selected career role.",
    },
    {
      icon: "📊",
      title: "Skill Match Score",
      description:
        "View your percentage match based on the skills required for your target role.",
    },
    {
      icon: "🚀",
      title: "Personalized Roadmap",
      description:
        "Get a structured learning roadmap with topics, priorities, and mini-project suggestions.",
    },
    {
      icon: "💼",
      title: "Career Focused",
      description:
        "Explore skill requirements for different career roles and plan your learning journey.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="section-tag">OUR FEATURES</p>

        <h2>
          Everything You Need to
          <span> Grow Your Skills.</span>
        </h2>

        <p>
          Discover your strengths, identify missing skills, and
          take the next step toward your career goals.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;