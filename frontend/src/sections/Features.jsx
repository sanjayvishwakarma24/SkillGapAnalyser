import "./Features.css";

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="section-tag">POWERFUL FEATURES</p>

        <h2>
          Everything You Need to
          <span> Close the Gap.</span>
        </h2>

        <p>
          A smart career analysis system designed to help students
          understand where they are and what to learn next.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>Resume Analysis</h3>
          <p>
            Extract relevant information and technical skills directly
            from your resume.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3>AI Skill Extraction</h3>
          <p>
            NLP techniques identify and organize the skills present
            in your resume.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Skill Gap Detection</h3>
          <p>
            Compare your current skills with the requirements of
            your target career role.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Skill Match Score</h3>
          <p>
            Get a clear percentage showing how closely your skills
            match your selected career path.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🗺️</div>
          <h3>Personalized Roadmap</h3>
          <p>
            Receive a structured learning sequence based on your
            identified skill gaps.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Career Focused</h3>
          <p>
            Turn your skill analysis into practical next steps for
            your desired career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;